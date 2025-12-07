import React from 'react'


const usegetMachines = (props) => {
    let machines = []
    const machineItems = props.machineData.items;
    
    const {machineDescription, machineId, machineName, machineSort, onSortMachines} = props;
   

  if(machineItems.length > 0){    
machineItems.forEach((machine) => {

    const description = machineDescription?.get(machine)?.value;
    const id = machineId?.get(machine)?.value;
    const name = machineName?.get(machine)?.value;

    const rawSort = machineSort?.get(machine)?.value;
const sort = rawSort ? Number(rawSort.c.join("")) : 0;  // This is because Mendix takes Integers as big object. So we have to convert big object to Number.


    //  const sort = machineSort?.get(machine)?.value;
    machines.push({description,id,name, sort})
    
});
  }

 
const callonSortMachines = () => {
  if(onSortMachines && onSortMachines.canExecute){
    onSortMachines.execute();
  }
}
    
  return {machines, callonSortMachines}
  
}

export default usegetMachines