import styled from '@emotion/styled';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 20px;
  & label {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  & span {
    display: inline-block;
  }
  & input {
    width: 100%;
    max-width: 190px;
  }
  & button {
    width: 100%;
  }
`;
