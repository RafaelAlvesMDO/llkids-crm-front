import React from "react";
import SideBar from "../components/home/SideBar";
import NavBar from "../components/home/NavBar";
import CustomerList from "../components/home/CustomerList";
import AddCustomerButton from "../components/home/AddCustomerButton";
import FilterList from "../components/home/FilterList";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex h-screen bg-neutral-200">
        <SideBar />

        <div className="flex flex-col flex-1">
          <NavBar />

          <main className="flex-1 p-6 overflow-auto space-y-4">
            <div className="flex items-center justify-between">
              <AddCustomerButton />
              <FilterList />
            </div>
            <CustomerList />
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
