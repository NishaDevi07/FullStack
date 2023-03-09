package com.example.demo1.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo1.model.BusManagement;

public interface BusManagementRepository extends JpaRepository<BusManagement, Integer>{

}
