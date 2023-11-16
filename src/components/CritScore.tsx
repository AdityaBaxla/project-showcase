import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  critScore: number;
}

const CritScore = ({ critScore }: Props) => {
  const color = critScore > 90 ? "green" : critScore > 80 ? "yellow" : "red";
  return <Badge colorScheme={color}>{critScore}</Badge>;
};

export default CritScore;
