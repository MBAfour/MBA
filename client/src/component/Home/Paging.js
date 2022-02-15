import React  from 'react';
import styled from 'styled-components';

const PageUl = styled.ul`
  list-style: none;
  display: table;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 80px;
`;

const PageLi = styled.li`
  display: inline-block;
`;

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
`;


const Paging = ({itemsPerPage, totalPosts, paginate}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <PageUl className="pagination">
          {pageNumbers.map((number) => (
            <PageLi key={number} className="page-item">
              <PageSpan onClick={() => paginate(number)} className="page-link">
                {number}
              </PageSpan>
            </PageLi>
          ))}
        </PageUl>
      </nav>
    </div>
  );
}

export default Paging;