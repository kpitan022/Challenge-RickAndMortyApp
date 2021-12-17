/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Card } from 'react-native-elements';
import { fondo, fondoActivo, fondoClaro } from '../../assets/constants/Constants';
// import imagen from '../../../assets/imagen.png';
const imagenPathBanner = '../../assets/images/banner.png'


const myCard = ({ encabezado=undefined,body=undefined, footer=undefined }:any) => {

  return (
    <>
      <Card containerStyle={{ justifyContent: 'center', borderRadius: 20,width:'90%', backgroundColor:fondoClaro}}>
        {encabezado}
      <Card.Divider />
        {body}
      <Card.Divider />
      {footer}
      </Card>
    </>
  )};

export default myCard;
