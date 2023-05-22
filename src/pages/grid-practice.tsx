import React, { FC } from "react";

interface CardProps {
  title?: string;
  body?: string | number;
}

const Card: FC<CardProps> = ({ title = "Hello", body = "World" }) => {
  return (
    <div className="card bg-base-100 shadow-xl max-sm:w-48 max-md:w-56 lg:w-28">
        <div className="card-body rounded-md">
            <h2 className="card-title">{title}</h2>
            <p>{body}</p>
        </div>
    </div>
  );
};

const Grid = () => {
  return (
    <div className="container mx-auto grid gap-8 max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Grid;
