import React from 'react'

const useGetMachineHelper = (props) => {

    const {displayValue:draggedMachineId, setValue: setdraggedMachineId} = props.draggedMachineId;
    // const {draggedMachineId : {displayValue: draggedMachineId}} = props
     const {displayValue:droppedOverMachineId, setValue: setdroppedOverMachineId} = props.droppedOverMachineId;


  return {
    draggedMachineId, setdraggedMachineId, droppedOverMachineId, setdroppedOverMachineId
  }
}

export default useGetMachineHelper