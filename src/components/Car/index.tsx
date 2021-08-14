import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from './styles';

import Gasoline from '../../assets/gasoline.svg';
import {CarDto} from '../../dtos/CarDto';

interface CarProps extends TouchableOpacityProps {
  data: CarDto;
}
const Car: React.FC<CarProps> = ({data, ...rest}) => {
  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>
        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>
          <Type>
            <Gasoline />
          </Type>
        </About>
      </Details>
      <CarImage
        source={{
          uri: data.thumbnail,
        }}
        resizeMode="contain"
      />
    </Container>
  );
};

export default Car;
