import React from 'react'

// generates a list of option tags for available quantity of selected size //
export function createOptionQuantity(inventory) {
  const arr = []
  if (inventory) {
    for (let i = 0; i < inventory.inventoryLeft + 1; i++) {
      arr.push(
        <option value={i} key={i} name="quantity">
          {i}
        </option>
      )
    }
  }
  return arr
}
