import Map "mo:core/Map";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Iter "mo:core/Iter";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Int "mo:core/Int";

actor {
  type Inquiry = {
    customerName : Text;
    contact : Text;
    productInterest : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Inquiry {
    public func compare(inquiry1 : Inquiry, inquiry2 : Inquiry) : Order.Order {
      Int.compare(inquiry1.timestamp, inquiry2.timestamp);
    };
  };

  let inquiries = Map.empty<Time.Time, Inquiry>();

  public shared ({ caller }) func submitInquiry(customerName : Text, contact : Text, productInterest : Text, message : Text) : async () {
    let timestamp = Time.now();
    let inquiry : Inquiry = {
      customerName;
      contact;
      productInterest;
      message;
      timestamp;
    };
    inquiries.add(timestamp, inquiry);
  };

  public query ({ caller }) func listInquiries() : async [Inquiry] {
    inquiries.values().toArray().sort();
  };
};
