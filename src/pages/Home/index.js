import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-converse-all-star-ct-as-core-ox/80/D26-0147-080/D26-0147-080_detalhe1.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis All Star</strong>
        <span>R$149,79</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR A CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-converse-all-star-ct-as-core-ox/80/D26-0147-080/D26-0147-080_detalhe1.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis All Star</strong>
        <span>R$149,79</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR A CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-converse-all-star-ct-as-core-ox/80/D26-0147-080/D26-0147-080_detalhe1.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis All Star</strong>
        <span>R$149,79</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR A CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-converse-all-star-ct-as-core-ox/80/D26-0147-080/D26-0147-080_detalhe1.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis All Star</strong>
        <span>R$149,79</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR A CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-converse-all-star-ct-as-core-ox/80/D26-0147-080/D26-0147-080_detalhe1.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis All Star</strong>
        <span>R$149,79</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR A CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-converse-all-star-ct-as-core-ox/80/D26-0147-080/D26-0147-080_detalhe1.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis All Star</strong>
        <span>R$149,79</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR A CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
