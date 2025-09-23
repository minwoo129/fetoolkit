import styled from '@emotion/styled';

export const TemplateContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (prefers-color-scheme: dark) {
    background-color: #242424;
  }
`;

export const MenuTemplateWrapper = styled.div`
  display: flex;
  min-width: 250px;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid #404040;
  background-color: #242424;
  overflow: scroll;
`;

export const MenuTemplateContent = styled.div`
  padding: 1.5rem 1rem;
`;

export const MenuLogo = styled.span`
  display: grid;
  height: 2.5rem;
  width: 8rem;
  place-content: center;
  border-radius: 0.5rem;
  background-color: #404040;
  font-size: 0.75rem;
  color: #e5e5e5;
`;

export const MenuList = styled.ul`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;
