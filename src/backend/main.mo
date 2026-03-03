import Text "mo:core/Text";
import Map "mo:core/Map";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Nat "mo:core/Nat";
import List "mo:core/List";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Order "mo:core/Order";

actor {
  type Location = {
    #kurla;
    #ghatkopar;
    #other : Text;
  };

  type DrivingExperience = {
    #zeroToOneYear;
    #oneToThreeYears;
    #threePlusYears;
  };

  type Application = {
    fullName : Text;
    phoneNumber : Text;
    location : Location;
    drivingLicenseNumber : Text;
    experience : DrivingExperience;
    createdAtNanos : Time.Time;
    id : Nat;
  };

  module Application {
    public func compare(a1 : Application, a2 : Application) : Order.Order {
      Nat.compare(a1.id, a2.id);
    };
  };

  var nextApplicationId = 0;
  let applications = Map.empty<Nat, Application>();

  func getNextApplicationId() : Nat {
    let id = nextApplicationId;
    nextApplicationId += 1;
    id;
  };

  public shared ({ caller }) func submitApplication(fullName : Text, phoneNumber : Text, location : Location, drivingLicenseNumber : Text, experience : DrivingExperience) : async () {
    let application : Application = {
      fullName;
      phoneNumber;
      location;
      drivingLicenseNumber;
      experience;
      createdAtNanos = Time.now();
      id = getNextApplicationId();
    };
    applications.add(application.id, application);
  };

  public query ({ caller }) func getAllApplications() : async [Application] {
    applications.values().toArray().sort();
  };

  public query ({ caller }) func getTotalApplications() : async Nat {
    applications.size();
  };
};
