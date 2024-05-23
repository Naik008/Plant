package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Plant;

@Repository
public interface PlantRepository extends JpaRepository<Plant, Long> {
	// 必要に応じてカスタムクエリメソッドを追加できます
}
