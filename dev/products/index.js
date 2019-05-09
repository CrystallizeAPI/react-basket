import React from 'react';
import { useQuery } from 'urql';

import Product from './product';
import { Outer, List, Section, SectionHeader, ListItem } from './style';

function onlyFolders(node) {
  return node.type === 'folder';
}

function onlyProducts(node) {
  return node.type === 'product';
}

const query = `
{
  tree(path: "/", language:"en") {
    ... on Item {
      id
      name
      type
      
      children {
        ... on Product {
          id
          name
          type

          variants {
            id
            name
            price
            sku
            image {
              url
              altText
              variants {
                url
                key
                width
              }
            }
          }
        }
      }
    }
  }
}

`;

const Products = () => {
  const [{ fetching, data }] = useQuery({ query });

  if (fetching || !data) {
    return <Outer>Fetching products....</Outer>;
  }

  return (
    <Outer>
      {data.tree.filter(onlyFolders).map(topTreeNode => (
        <Section key={topTreeNode.id}>
          <SectionHeader>{topTreeNode.name}</SectionHeader>
          <List>
            {topTreeNode.children.filter(onlyProducts).map(child => (
              <ListItem key={child.id}>
                <Product {...child} />
              </ListItem>
            ))}
          </List>
        </Section>
      ))}
    </Outer>
  );
};

export default Products;
