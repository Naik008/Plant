import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [plants, setPlants] = useState([]);
    const [newPlant, setNewPlant] = useState({
        name: '',
        growth: 0,
        watering_frequency: '',
        sunlight: '',
        size: ''
    });

    const fetchPlants = async () => {
        const response = await axios.get('/plants');
        setPlants(response.data);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPlant({ ...newPlant, [name]: value });
    };

    const handleAddPlant = async (e) => {
        e.preventDefault();
        await axios.post('/plants', newPlant);
        fetchPlants();
    };

    const handleWaterPlant = async (id) => {
        await axios.post(`/plants/water/${id}`);
        fetchPlants();
    };

    const handleSunlightPlant = async (id) => {
        await axios.post(`/plants/sunlight/${id}`);
        fetchPlants();
    };

    useEffect(() => {
        fetchPlants();
    }, []);

    return (
        <div>
            <h1>Plant Simulation</h1>
            <form onSubmit={handleAddPlant}>
                <input
                    type="text"
                    name="name"
                    value={newPlant.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    required
                />
                <input
                    type="number"
                    name="growth"
                    value={newPlant.growth}
                    onChange={handleInputChange}
                    placeholder="Growth"
                    required
                />
                <input
                    type="text"
                    name="watering_frequency"
                    value={newPlant.watering_frequency}
                    onChange={handleInputChange}
                    placeholder="Watering Frequency"
                    required
                />
                <input
                    type="text"
                    name="sunlight"
                    value={newPlant.sunlight}
                    onChange={handleInputChange}
                    placeholder="Sunlight"
                    required
                />
                <input
                    type="text"
                    name="size"
                    value={newPlant.size}
                    onChange={handleInputChange}
                    placeholder="Size"
                    required
                />
                <button type="submit">Add Plant</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Growth</th>
                        <th>Watering Frequency</th>
                        <th>Sunlight</th>
                        <th>Size</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {plants.map((plant) => (
                        <tr key={plant.id}>
                            <td>{plant.name}</td>
                            <td>{plant.growth}</td>
                            <td>{plant.watering_frequency}</td>
                            <td>{plant.sunlight}</td>
                            <td>{plant.size}</td>
                            <td>
                                <button onClick={() => handleWaterPlant(plant.id)}>Water</button>
                                <button onClick={() => handleSunlightPlant(plant.id)}>Sunlight</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default App;
