import React, { useContext } from 'react';
import QRCode from 'qrcode.react';
import { Store } from '../Store';
export default function Qrcode() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  return (
    <div>
      <QRCode
        value="https://grootan1.onrender.com"
        style={{ marginRight: 50 }}
      />{' '}
      <p> Grootan </p> {userInfo && <div> {userInfo} </div>}{' '}
    </div>
  );
}
