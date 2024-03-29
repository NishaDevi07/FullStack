package com.example.demo1.model;

import java.util.Scanner;

import org.hibernate.annotations.DynamicUpdate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
@DynamicUpdate
public class BusManagement {
	/* scanner object private to this class is created to accept userInput */
	private static final Scanner scan=new Scanner(System.in);
	public BusManagement() {

	}

	private String startingPoint;
	private String endingPoint;
	private String driverName;
	private Long driverNumber;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	//@Column(name="Bus_number",length=10,unique=true)
	private int  busId;
	public int  getBusId() {
		return busId;
	}

	/*public void setBusId(Integer busId) {
		this.busId = busId;
	}*/

	private String busNumber;
	private String busType;
	private int costPerSeat;
	private int noOfSeats;
	public int getCostPerSeat() {
		return costPerSeat;
	}

	public void setCostPerSeat(int costPerSeat) {
		this.costPerSeat = costPerSeat;
	}

	public int getNoOfSeats() {
		return noOfSeats;
	}

	public void setNoOfSeats(int noOfSeats) {
		this.noOfSeats = noOfSeats;
	}

	public int getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(int totalPrice) {
		this.totalPrice = totalPrice;
	}

	public int getBookedSeats() {
		return bookedSeats;
	}

	public void setBookedSeats(int bookedSeats) {
		this.bookedSeats = bookedSeats;
	}

	private int totalPrice;
	private int bookedSeats;
	
	public String getStartingpoint() {
		return startingPoint;
	}

	public String getStartingPoint() {
		return startingPoint;
	}
	public void setStartingPoint(String startingPoint) {
		this.startingPoint = startingPoint;
	}
	public String getEndingPoint() {
		return endingPoint;
	}
	public void setEndingPoint(String endingPoint) {
		this.endingPoint = endingPoint;
	}
	public String getDriverName() {
		return driverName;
	}
	public void setDriverName(String driverName) {
		this.driverName = driverName;
	}
	public Long getDriverNumber() {
		return driverNumber;
	}
	
	public void setDriverNumber(Long driverNumber) {
		this.driverNumber = driverNumber;
	}
	
   public String getBusNumber() {
		return busNumber;
	}
	public void setBusNumber(String busNumber) {
		this.busNumber = busNumber;
	}
	public String getBusType() {
		return busType;
	}
	public void setBusType(String busType) {
		this.busType = busType;

}

	@Override
	public String toString() {
		return "BusManagement [startingPoint=" + startingPoint + ", endingPoint=" + endingPoint + ", driverName="
				+ driverName + ", driverNumber=" + driverNumber + ", busId=" + busId + ", busNumber=" + busNumber
				+ ", busType=" + busType + ", costPerSeat=" + costPerSeat + ", noOfSeats=" + noOfSeats + ", totalPrice="
				+ totalPrice + ", bookedSeats=" + bookedSeats + "]";
	}
	
}
