import React, { useState } from 'react';
import { ReactComponent as Globe } from '../../assets/svg/globe.svg';
import { ReactComponent as OfficeBuilding } from '../../assets/svg/office-building.svg';
import { ReactComponent as OnlineShopping } from '../../assets/svg/online-shopping.svg';
import { ReactComponent as PriceTag } from '../../assets/svg/price-tag.svg';
import { ReactComponent as ShoppingCart } from '../../assets/svg/shopping-cart.svg';
import { ReactComponent as WineBottle } from '../../assets/svg/wine-bottle.svg';
import { ReactComponent as Loupe } from '../../assets/svg/loupe.svg';
import { ReactComponent as Transparency } from '../../assets/svg/transparency.svg';
import { ReactComponent as MagnifyingGlass } from '../../assets/svg/magnifying-glass.svg';
import { ReactComponent as Heart } from '../../assets/svg/heart.svg';
import { ReactComponent as HeartBlank } from '../../assets/svg/heart-blank.svg';
import { ReactComponent as RightArrow } from '../../assets/svg/right-arrow.svg';
import { ReactComponent as LeftArrow } from '../../assets/svg/left-arrow.svg';
import { ReactComponent as User } from '../../assets/svg/user.svg';
import { ReactComponent as AlcoholicDrink } from '../../assets/svg/alcoholic-drink.svg';
import { ReactComponent as UserList } from '../../assets/svg/user-list.svg';

const Icons: React.FC = () => {
  const [state, setState] = useState<boolean>(false);

  if (
    false /* If User has logged in and product is alreeady on his favorites list */
  ) {
    return (
      <div>
        <Heart style={{ height: '100px', width: '100px', fill: 'red' }} />
      </div>
    );
  }

  const renderLikeButton = () => {
    if (state) {
      return (
        <Heart
          style={{
            height: '100px',
            width: '100px',
            fill: 'red',
          }}
          onMouseEnter={() => setState(true)}
          onMouseLeave={() => setState(false)}
        />
      );
    }

    return (
      <HeartBlank
        style={{
          height: '100px',
          width: '100px',
          fill: 'red',
        }}
        onMouseEnter={() => setState(true)}
        onMouseLeave={() => setState(false)}
      />
    );
  };

  return (
    <div>
      <h1>FavoriteIcon</h1>
      <Globe style={{ height: '100px', width: '100px' }} />
      <OfficeBuilding style={{ height: '100px', width: '100px' }} />
      <OnlineShopping style={{ height: '100px', width: '100px' }} />
      <PriceTag style={{ height: '100px', width: '100px' }} />
      <ShoppingCart style={{ height: '100px', width: '100px' }} />
      <WineBottle style={{ height: '100px', width: '100px' }} />
      <Loupe style={{ height: '100px', width: '100px' }} />
      <Transparency style={{ height: '100px', width: '100px' }} />
      <MagnifyingGlass style={{ height: '100px', width: '100px' }} />
      {renderLikeButton()}
      <RightArrow style={{ height: '100px', width: '100px', fill: 'green' }} />
      <LeftArrow style={{ height: '100px', width: '100px', fill: 'green' }} />
      <AlcoholicDrink style={{ height: '100px', width: '100px' }} />
      <User style={{ height: '100px', width: '100px' }} />
      <UserList style={{ height: '100px', width: '100px' }} />
    </div>
  );
};

export default Icons;
