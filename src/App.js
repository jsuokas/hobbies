import React, { useState } from 'react';
import gear from './gear.json'
import './App.css';
import FeatherIcon from 'feather-icons-react';

const consumablesWeight = {
  water: 1,
  gasBottleSmall: 0.1,
  gasBottleMedium: 0.230,
  toiletPaper: 0.1,
  wetWipes: 0.2,
  turmatMeal: 0.120
}

const typeToDescription = {
  sleep_system: 'Sleep system',
  rain_protection: 'Rain protection',
  cook_system: 'Cook system',
  water_system: 'Water system',
  misc: 'Misc',
  camera_gear: 'Camera gear',
  safety: 'Safety',
  clothing: 'Clothing',
  devices: 'Devices'
}

function App() {
  const [gearItemFilters, setGearItemFilters] = useState([])
  const [consumablesWater, setConsumablesWater] = useState(0)
  const [consumablesToiletPaper, setConsumablesToiletPaper] = useState(0)
  const [consumablesToiletWetWipes, setConsumablesToiletWetWipes] = useState(0)
  const [consumablesGasSmall, setConsumablesGasSmall] = useState(0)
  const [consumablesGasMedium, setConsumablesGasMedium] = useState(0)
  const [consumablesTurmatMeals, setConsumablesTurmatMeals] = useState(0)
  const totalConsumablesWeight = (consumablesWater * consumablesWeight.water) + (consumablesGasSmall * consumablesWeight.gasBottleSmall) + (consumablesGasMedium * consumablesWeight.gasBottleMedium) + (consumablesToiletPaper * consumablesWeight.toiletPaper) + (consumablesToiletWetWipes * consumablesWeight.wetWipes) + (consumablesTurmatMeals * consumablesWeight.turmatMeal)
  const totalWeight = gear
    .filter(it => gearItemFilters.filter(item => item.name === it.name).length !== 0)
    .reduce((previous, current) => previous + current.weight, totalConsumablesWeight)

  return (
    <div className="App">
      <div className="title"><h4>Base weight</h4><button className="button-secondary pure-button" onClick={() => setGearItemFilters(gear)}>Select all</button></div>
      <table class="pure-table">
          <tbody>
            {gear.map((item, index) => {
              const id = `gear-filter-stage-2-${item.name}`
              const isSelected = gearItemFilters.filter(it => it.name === item.name).length !== 0 ? true : false 
              const onChange = () => isSelected ? setGearItemFilters(gearItemFilters.filter(it => it.name !== item.name)) : setGearItemFilters([...gearItemFilters, item])
              const odd = index % 2 !== 0

              return (
                <tr className={odd ?  'pure-table-odd' : undefined} key={`key-${id}`}>
                  <td>
                  <input
                    id={id}
                    type="checkbox"
                    value={item.name}
                    name={item.name}
                    checked={isSelected}
                    onChange={onChange} />
                  </td>
                  <td><label htmlFor={id}>{item.name}</label></td>
                  <td>{item.weight}</td>
              </tr>
              )
            })}
          </tbody>
      </table>

      <div className="title"><h4>Consumables</h4></div>
      <table class="pure-table">
          <tbody>
            <tr>
              <td>
                <button onClick={() => setConsumablesWater(consumablesWater + 1)}><FeatherIcon icon="plus-circle" /></button>
                <button onClick={() => setConsumablesWater(consumablesWater > 0 ? consumablesWater - 1 : 0)}><FeatherIcon icon="minus-circle" /></button>
              </td>
              <td>
                <span className="consumables-label">{consumablesWater} liter of water</span>
              </td>
              <td>{consumablesWeight.water}</td>
            </tr>
            <tr className="pure-table-odd">
              <td>
                <button onClick={() => setConsumablesGasSmall(consumablesGasSmall + 1)}><FeatherIcon icon="plus-circle" /></button>
                <button onClick={() => setConsumablesGasSmall(consumablesGasSmall > 0 ? consumablesGasSmall - 1 : 0)}><FeatherIcon icon="minus-circle" /></button>
              </td>
              <td>
                <span className="consumables-label">{consumablesGasSmall} small gas bottles)</span>
              </td>
              <td>{consumablesWeight.gasBottleSmall}</td>
            </tr>
            <tr>
              <td>
                <button onClick={() => setConsumablesGasMedium(consumablesGasMedium + 1)}><FeatherIcon icon="plus-circle" /></button>
                <button onClick={() => setConsumablesGasMedium(consumablesGasMedium > 0 ? consumablesGasMedium - 1 : 0)}><FeatherIcon icon="minus-circle" /></button>
              </td>
              <td>
                <span className="consumables-label">{consumablesGasMedium} medium gas bottles (256g)</span>
              </td>
              <td>{consumablesWeight.gasBottleMedium}</td>
            </tr>
            <tr className="pure-table-odd">
              <td>
                <button onClick={() => setConsumablesTurmatMeals(consumablesTurmatMeals + 1)}><FeatherIcon icon="plus-circle" /></button>
                <button onClick={() => setConsumablesTurmatMeals(consumablesTurmatMeals> 0 ? consumablesTurmatMeals - 1 : 0)}><FeatherIcon icon="minus-circle" /></button>
              </td>
              <td>
                <span className="consumables-label">{consumablesTurmatMeals} packs of Turmat meals</span>
              </td>
              <td>{consumablesWeight.turmatMeal}</td>
            </tr>
            <tr>
              <td>
                <button onClick={() => setConsumablesToiletPaper(consumablesToiletPaper + 1)}><FeatherIcon icon="plus-circle" /></button>
                <button onClick={() => setConsumablesToiletPaper(consumablesToiletPaper > 0 ? consumablesToiletPaper - 1 : 0)}><FeatherIcon icon="minus-circle" /></button>
              </td>
              <td>
                <span className="consumables-label">{consumablesToiletPaper} rolls of toilet paper</span>
              </td>
              <td>{consumablesWeight.toiletPaper}</td>
            </tr>
            <tr className="pure-table-odd">
              <td>
                <button onClick={() => setConsumablesToiletWetWipes(consumablesToiletWetWipes + 1)}><FeatherIcon icon="plus-circle" /></button>
                <button onClick={() => setConsumablesToiletWetWipes(consumablesToiletWetWipes > 0 ? consumablesToiletWetWipes - 1 : 0)}><FeatherIcon icon="minus-circle" /></button>
              </td>
              <td>
                <span className="consumables-label">{consumablesToiletWetWipes} packs of wet wipes (50pc)</span>
              </td>
              <td>{consumablesWeight.wetWipes}</td>
            </tr>
          </tbody>
      </table>

      <div className="title"><strong>Total</strong> {totalWeight.toFixed(2)}kg</div>
    </div>
  );
}

export default App;
