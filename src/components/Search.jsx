import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />

        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        ></input>
      </div>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  
  margin: 0rem 3rem;
  

  div {
    position: relative;
    width: 100%;
    height: 50%;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 0.9rem;
    color: white;
    padding: 1rem 3rem;
    outline: none;
    border: none;
    width: 100%;
    height: 50px;
    border-radius: 1rem;
  }
  svg{
    position: absolute;
    top: 50%:
    left: 0%;
    transform: translate(100%, 90%);
    color: white;
  }
`;

export default Search;
