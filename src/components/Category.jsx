import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
      <SLink to={"/cuisine/Italian"}>
        <logo>
          <FaPizzaSlice />
        </logo>
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/cuisine/American"}>
        <logo>
          <FaHamburger />
        </logo>
        <h4>American</h4>
      </SLink>
      <SLink to={"/cuisine/Thai"}>
        <logo>
          <GiNoodles />
        </logo>
        <h4>Thai</h4>
      </SLink>
      <SLink to={"/cuisine/Japanese"}>
        <logo>
          <GiChopsticks />
        </logo>
        <h4>Japanese</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;
const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify_content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  curser: pointer;
  transform: scale(0.6);
  logo {
    align-item: center;
    width: 20px;
    margin: 10px;
    margin-top: 20px;
  }
  h4 {
    color: white;
    font-size: 0.8rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;

export default Category;
