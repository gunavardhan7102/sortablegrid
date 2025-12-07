
import React, {createElement} from 'react'
import usegetMachines from './hooks/usegetMachines'
import SortableList, {SortableItem} from 'react-easy-sort'
import './ui/SortableGrid.css'
import useGetMachineHelper from './hooks/useGetMachineHelper'



const SortableGrid = (props) => {
    console.log('props1',props)
    const machineItems = props.machineData.items;
    console.log('machineItems1',machineItems)

   

  if(props.machineData.status === 'available'){
    const {machines, callonSortMachines} =  usegetMachines(props);
    console.log('machines......', machines)


    const {draggedMachineId, setdraggedMachineId, droppedOverMachineId, setdroppedOverMachineId} = useGetMachineHelper(props);

 const onSortEnd = (oldIndex, newIndex) => {
  setdraggedMachineId(machines[oldIndex].id)
  setdroppedOverMachineId(machines[newIndex].id)
   callonSortMachines();
  };

 

   return (

        <div style={{
          border: "1px solid black"
        }}>
<SortableList onSortEnd={onSortEnd}  className="list" draggedItemClassName="dragged">
      {machines
      .sort((a,b)=>a.sort-b.sort)
      .map((machine) => (
        <SortableItem key={machine.id}>
          <div className="item">{machine.sort}------{machine.name}</div>
                 </SortableItem>
      ))}
    </SortableList>

        </div>
    );
    
  }
  else
     return(
    <div>Loading...</div>
    ) 
     }

export default SortableGrid