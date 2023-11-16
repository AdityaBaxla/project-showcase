import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GameCardSkeletion = () => {
  return (
    <Card
      height={"300px"}
      width={"350px"}
      borderRadius={"10px"}
      overflow={"hidden"}
    >
      {" "}
      <Skeleton height={"180px"} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeletion;
