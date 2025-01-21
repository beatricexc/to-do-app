import React from "react";
import Form from "@/src/components/Form";
import Header from "@/src/components/Header";
import TODOHero from "@/src/components/TODOHero"; 
import TODOList from "@/src/components/TODOList";

function Home() {
    return (
      <div className="wrapper">
        <Header />
        <TODOHero todos_completed = {0} total_todos={0}/>
        <Form />
        <TODOList todos ={[]} />
      </div>
  );
}
export default Home;