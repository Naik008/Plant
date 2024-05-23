package plantcare.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.data.PlantService;
import com.example.demo.model.Plant;

@RestController
@RequestMapping("/plants")
public class PlantController {

	private final PlantService plantService;

	@Autowired
	public PlantController(PlantService plantService) {
		this.plantService = plantService;
	}

	@GetMapping
	public List<Plant> getAllPlants() {
		return plantService.getAllPlants();
	}

	@GetMapping("/{id}")
	public Optional<Plant> getPlantById(@PathVariable Long id) {
		return plantService.getPlantById(id);
	}

	@PostMapping
	public Plant createPlant(@RequestBody Plant plant) {
		return plantService.savePlant(plant);
	}

	@DeleteMapping("/{id}")
	public void deletePlant(@PathVariable Long id) {
		plantService.deletePlant(id);
	}
}
