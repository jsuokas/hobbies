import React, { useState } from 'react';
import gear from './gear.json'
import './App.css';

const consumablesWeight = {
  gasBottleSmall: 0.1,
  gasBottleMedium: 0.230
}

function App() {
  const [gearTypeFilters, setGearTypeFilters] = useState(gear.map(it => it.type))
  const [gearItemFilters, setGearItemFilters] = useState([])
  const [consumablesWater, setConsumablesWater] = useState(0)
  const [consumablesGasSmall, setConsumablesGasSmall] = useState(0)
  const [consumablesGasMedium, setConsumablesGasMedium] = useState(0)
  const gearItems = gear.filter(it => gearTypeFilters.includes(it.type))
  const totalWeight = gearItems
    .filter(it => gearTypeFilters.includes(it.type))
    .filter(it => gearItemFilters.filter(item => item.name === it.name).length !== 0)
    .reduce((previous, current) => previous + current.weight, 0 + consumablesWater + (consumablesGasSmall * consumablesWeight.gasBottleSmall) + (consumablesGasMedium * consumablesWeight.gasBottleMedium))

  return (
    <div className="App">
      <div className="title"><h4>What type of gear you are taking?</h4></div>
      <div className="content">
      {gear
        .map(it => it.type)
        .reduce((previous, current) => previous.includes(current) ? previous : [...previous, current], [])
        .map(gearType => {
          const isSelected = gearTypeFilters.includes(gearType)
          const id = `gear-filter-stage-1-${gearType}`
          const onChange = () => isSelected ? setGearTypeFilters(gearTypeFilters.filter(it => it !== gearType)) : setGearTypeFilters([...gearTypeFilters, gearType])

          return (
            <div key={`key-${id}`} className="gear-item">
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
      </div>

      <div className="title"><h4>Base weight</h4><input className="select-all-button" type="button" value="Select all" onClick={() => setGearItemFilters(gearItems)} /></div>
      <div className="content">
      
      {gearItems.map(item => {
        const id = `gear-filter-stage-2-${item.name}`
        const isSelected = gearItemFilters.filter(it => it.name === item.name).length !== 0 ? true : false 
        const onChange = () => isSelected ? setGearItemFilters(gearItemFilters.filter(it => it.name !== item.name)) : setGearItemFilters([...gearItemFilters, item])

        return (
          <div key={`key-${id}`} className="gear-item">
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
      </div>

      <div className="title"><h4>Consumables</h4></div>
      <div className="content">
        <div>
          <input type="button" value="+" onClick={() => setConsumablesWater(consumablesWater + 1)} />
          <input type="button" value="-" onClick={() => setConsumablesWater(consumablesWater > 0 ? consumablesWater - 1 : 0)} />
          <span className="consumables-label">{consumablesWater} liters of water</span>
        </div>
        <div>
          <input type="button" value="+" onClick={() => setConsumablesGasSmall(consumablesGasSmall + 1)} />
          <input type="button" value="-" onClick={() => setConsumablesGasSmall(consumablesGasSmall > 0 ? consumablesGasSmall - 1 : 0)} />
          <span className="consumables-label">{consumablesGasSmall} small gas bottles (100g)</span>
        </div>
        <div>
          <input type="button" value="+" onClick={() => setConsumablesGasMedium(consumablesGasMedium + 1)} />
          <input type="button" value="-" onClick={() => setConsumablesGasMedium(consumablesGasMedium > 0 ? consumablesGasMedium - 1 : 0)} />
          <span className="consumables-label">{consumablesGasMedium} medium gas bottles (256g)</span>
        </div>
      </div>

      <div className="title"><strong>Total</strong> {totalWeight.toFixed(2)}kg</div>
    </div>
  );
}

export default App;
