import React, { useState } from 'react';
import './App.css';

const gear = [{
  name: 'Fjällräven Kajka 65L',
  type: 'rucksack',
  weight: 3.29
},
{
  name: 'Hilleberg Allak 2',
  type: 'sleep',
  weight: 3.3
},
{
  name: 'Nemo Hornet 1P',
  type: 'sleep',
  weight: 0.8
},
{
  name: 'Fjällräven Kajka 65L Raincover',
  type: 'rain',
  weight: 0.152
},
{
  name: 'Naturehike Mongar 2P',
  type: 'sleep',
  weight: 1.911
},
{
  name: 'Thermarest Z-Lite Sleeping pad',
  type: 'sleep',
  weight: 0.657
},
{
  name: 'Sea to Summit Thermolite Reactor Extreme',
  type: 'sleep',
  weight: 0.39
},
{
  name: 'Sea to summit Spark SpIV sleeping bag',
  type: 'sleep_cold_weather',
  weight: 0.921
},
{
  name: 'Food cup',
  type: 'cooking',
  weight: 0.069
},
{
  name: 'Primus kettle',
  type: 'cooking',
  weight: 0.275
},
{
  name: 'Primus stove',
  type: 'cooking',
  weight: 0.129
},
{
  name: 'Sea to summit spoon',
  type: 'cooking',
  weight: 0.011
},
{
  name: 'Cricket lighter',
  type: 'cooking',
  weight: 0.013
},
{
  name: 'Matches',
  type: 'cooking',
  weight: 0.007
},
{
  name: 'Pouch for lighters',
  type: 'cooking',
  weight: 0.010
},
{
  name: 'Nalgene water bottle 1 liter',
  type: 'hydration',
  weight: 0.178
},
{
  name: 'Nalgene water bottle 1 liter (2)',
  type: 'hydration',
  weight: 0.178
},
{
  name: 'Petzl Tikka head lamp',
  type: 'dark',
  weight: 0.085
},
{
  name: 'Martiini knife',
  type: 'cooking',
  weight: 0.120
},
{
  name: 'Dish brush',
  type: 'cooking',
  weight: 0.025
},
{
  name: 'Dishes sustance',
  type: 'cooking',
  weight: 0.073
},
{
  name: 'Cumulus Quilt 250',
  type: 'sleep',
  weight: 0.511
},
{
  name: 'Ticket to the moon with ropes (big)',
  type: 'comfort',
  weight: 0.755
},
{
  name: 'Ticket to the moon with ropes (small)',
  type: 'comfort',
  weight: 0.355
},
{
  name: 'Salomon soft flask with water purifier',
  type: 'hydration',
  weight: 0.058
},
{
  name: 'Toilet paper',
  type: 'toilet',
  weight: 0.100
},
{
  name: 'Toilet savet',
  type: 'toilet',
  weight: 0.3
},
{
  name: 'Kuksa',
  type: 'cooking',
  weight: 0.119
},
{
  name: 'First aid kit',
  type: 'safety',
  weight: 0.165
},
{
  name: 'Pillow case',
  type: 'sleep',
  weight: 0.079
},
{
  name: 'Merino base layer',
  type: 'sleep',
  weight: 0.416
},
{
  name: 'Peak Performance down jacket',
  type: 'extra_clothing_cold_weather',
  weight: 0.6
},
{
  name: 'Woolly socks',
  type: 'sleep',
  weight: 0.101
},
{
  name: 'Mini towel',
  type: 'swim',
  weight: 0.78
},
{
  name: 'Swim pants',
  type: 'swim',
  weight: 0.03
},
{
  name: 'Extra batteries for torch and headlamp',
  type: 'dark',
  weight: 0.057
},
{
  name: 'Battery for devices',
  type: 'devices',
  weight: 0.258
},
{
  name: 'Torch',
  type: 'dark',
  weight: 0.055
},
{
  name: 'Cords',
  type: 'devices',
  weight: 0.087
},
{
  name: '2 pairs of boxers',
  type: 'extra_clothing',
  weight: 0.142
},
{
  name: '2 pairs of camp socks',
  type: 'extra_clothing',
  weight: 0.062
},
{
  name: 'Patagonia rain jacket',
  type: 'rain',
  weight: 0.332
},
{
  name: 'Sherpa T-shirt',
  type: 'extra_clothing',
  weight: 0.181
},
{
  name: 'Icebreaker Merino Wool Shirt',
  type: 'extra_clothing_cold_weather',
  weight: 0.409
},
{
  name: 'Toothbrush and paste',
  type: 'hygienie',
  weight: 0.100
},
{
  name: 'Map',
  type: 'safety',
  weight: 0.039
},
{
  name: 'Compass',
  type: 'safety',
  weight: 0.035
},
{
  name: 'Frying spatula',
  type: 'cooking',
  weight: 0.022
},
{
  name: 'Salomon rain pants',
  type: 'rain',
  weight: 0.4
},
{
  name: 'Haglöfs camp pants',
  type: 'comfort',
  weight: 0.5
},
{
  name: 'Camp shoes',
  type: 'comfort',
  weight: 0.4
},
{
  name: 'Headphones',
  type: 'comfort',
  weight: 0.013
},
{
  name: 'Sunglasses',
  type: 'comfort',
  weight: 0.100
},
{
  name: 'Phone',
  type: 'necessities',
  weight: 0.2
},
{
  name: 'Home keys',
  type: 'necessities',
  weight: 0.3
}]

function App() {
  const [gearTypeFilters, setGearTypeFilters] = useState(gear.map(it => it.type))
  const [gearItemFilters, setGearItemFilters] = useState([])
  const gearItems = gear.filter(it => gearTypeFilters.includes(it.type))
  const totalWeight = gearItems
    .filter(it => gearTypeFilters.includes(it.type))
    .filter(it => gearItemFilters.filter(item => item.name === it.name).length !== 0)
    .reduce((previous, current) => previous + current.weight, 0)

  return (
    <div className="App">
      <h4>Type of gear</h4>
      {gear
        .map(it => it.type)
        .reduce((previous, current) => previous.includes(current) ? previous : [...previous, current], [])
        .map(gearType => {
          const isSelected = gearTypeFilters.includes(gearType)
          const id = `gear-filter-stage-1-${gearType}`
          const onChange = () => isSelected ? setGearTypeFilters(gearTypeFilters.filter(it => it !== gearType)) : setGearTypeFilters([...gearTypeFilters, gearType])

          return (
            <div key={`key-${id}`}>
              <input
              id={id}
              type="checkbox"
              value={gearType}
              name={gearType}
              checked={isSelected}
              onChange={onChange} />
              <label htmlFor={id}>{gearType}</label>
            </div>
          )
        })}
      <h4>Items</h4>
      <input type="button" value="Select all" onClick={() => setGearItemFilters(gearItems)} />
      {gearItems.map(item => {
        const id = `gear-filter-stage-2-${item.name}`
        const isSelected = gearItemFilters.filter(it => it.name === item.name).length !== 0 ? true : false 
        const onChange = () => isSelected ? setGearItemFilters(gearItemFilters.filter(it => it.name !== item.name)) : setGearItemFilters([...gearItemFilters, item])

        return (
          <div key={`key-${id}`}>
            <input
                id={id}
                type="checkbox"
                value={item.name}
                name={item.name}
                checked={isSelected}
                onChange={onChange} />
                <label htmlFor={id}>{item.name} ({item.weight})</label>
          </div>
        )
      })}
      <div className="total-weight"><strong>Weight</strong> {totalWeight.toFixed(2)}kg</div>
    </div>
  );
}

export default App;
