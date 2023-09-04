/*
 * @Description: 
 * @Version: 2.0
 * @Author: huzhenghui
 * @Date: 2023-08-18 11:57:03
 * @LastEditors: huzhenghui
 * @LastEditTime: 2023-09-04 18:06:03
 */
"use client"
import {Select, SelectItem, Input} from "@nextui-org/react";
import {Button} from '@nextui-org/button'; 
import {animals} from "./data";


const DashboardPage: React.FC = () => {
  const arr = new Array(5).fill(0)
  return (
    <main className="w-full h-full p-4 bg-cyan-300/10 rounded-lg shadow-xl">
      <Input
        isReadOnly
        type="email"
        label="Email"
        variant="bordered"
        defaultValue="junior@nextui.org"
        className="max-w-xs"
      />
      <Select
        items={animals}
        label="Favorite Animal"
        placeholder="Select an animal"
        className="max-w-xs"
      >
        {(animal) => <SelectItem key={animal.value}>{animal.label}</SelectItem>}
      </Select>
      <Button color="primary">Click me</Button>
    </main>
  )
}

export default DashboardPage;