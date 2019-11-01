import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { space, color } from "styled-system";

interface GrowlProps {
  list: GrowlBody[];
}

interface GrowlBody {
  type: "success" | "error" | "warning";
  message: string;
}

const Growl: React.FunctionComponent<GrowlProps> = ({ list }) => {
  const [growls, setGrowls] = useState(list);

  useEffect(() => {
    const timer = setTimeout(() => {
      setGrowls([growls.shift()]);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    setGrowls(list);
  }, [list]);

  if (!list || list.length === 0) {
    return null;
  }

  return (
    <>
      {growls.map((growl: GrowlBody, index) => (
        <StyledGrowl p={2} bg="green" color="#fff" key={`growl-${index}`}>
          {growl.message}
        </StyledGrowl>
      ))}
    </>
  );
};

export default Growl;

const StyledGrowl = styled.div`
  ${space}
  ${color}
  font-size: 1rem;
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  z-index: 10000;
`;
