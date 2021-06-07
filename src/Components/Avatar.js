import React from 'react';

function Avatar() {
  return (
    <div className='img-container'>
      <div className='background-images'>
        <img src='./images/cloud.png' width='50px' alt='clound' />
        <img src='./images/cloud.png' width='200px' alt='clound' />
        <img src='./images/cloud.png' width='75px' alt='clound' />
        <img src='./images/cloud.png' width='100px' alt='clound' />
      </div>
      <div className='background-images'>
        <img src='./images/cloud.png' width='50px' alt='clound' />
        <img src='./images/cloud.png' width='200px' alt='clound' />
        <img src='./images/cloud.png' width='75px' alt='clound' />
        <img src='./images/cloud.png' width='100px' alt='clound' />
      </div>
      <div className='avatar'>
        <div class='forhead'>
          <div class='ears'>
            <div class='ear left'>
              <div class='ear inside'></div>
            </div>
            <div class='ear right'>
              <div class='ear inside'></div>
            </div>
          </div>
        </div>
        <div class='face'>
          <div class='eyes'>
            <div class='eye'></div>
            <div class='eye'></div>
          </div>
          <div class='cheeks'>
            <div class='cheek'></div>
            <div class='cheek'></div>
          </div>
          <div class='mouth'>
            <div class='lip'></div>
            <div class='lip'></div>
          </div>
        </div>
        <div class='object'>
          <img src='./images/carrot.png' alt='carrot' width='50px' height='50px' />
        </div>
      </div>
    </div>
  );
}

export default Avatar;
