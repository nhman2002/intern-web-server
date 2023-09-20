import { Request, NextFunction, Response } from "express";
import prismaClient from "../utils/prismaClient";
import { messageResponse } from "../utils/messageResponse";


// import jwt from 'jsonwebtoken';

export const Products = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await prismaClient.aBC.findMany({

    });
    return res.status(200).json(
      messageResponse(200, {
        product: products,
      })) 
  } catch (error) {
    next(error);
    res.status(500).send("Internal Server Error");
  }
};

export const Product = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await prismaClient.$transaction(async (tx) => {
      const product = await tx.aBC.findUnique({
        where: {
          id: parseInt(req.params.id),

        }
      });
      return res.status(200).json(
        messageResponse(200, {
          product: product,
        })
      );
    });
  } catch (error) {
    next(error);
    res.status(500).send("Internal Server Error");
  }
};

export const PostProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data2 :any ={
      image: req.body.image,
          name: req.body.name,
          description: req.body.description,
          price: parseFloat(req.body.price),
          color: req.body.color,
    }
    const result = await prismaClient.$transaction(async (tx) => {
      const product = await tx.aBC.create({
          data: data2,
      })
      return  product ;
  });
    return res.status(200).json(
      messageResponse(200, {
        product: result,
      })
    );
  } catch (error) {
    next(error);
    res.status(500).send("Internal Server Error");
  }
};


export const PutProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await prismaClient.$transaction([
      prismaClient.aBC.update({
        where: {
          id: parseInt(req.params.id)
        },
        data: {
          image: req.body.image,
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          color: req.body.color,
        },
      }),
    ]);
    return res.status(200).json(
      messageResponse(200, {
        product: product,
      })
    );
  } catch (error) {
    next(error);
    res.status(500).send("Internal Server Error");
  }
};

export const DelProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await prismaClient.$transaction([
      prismaClient.aBC.delete({
        where: {
          id: parseInt(req.params.id)
        },
      }),
    ]);
    return res.status(200).json(
      messageResponse(200, {
        product: product,
      })
    );
  } catch (error) {
    next(error);
    res.status(500).send("Internal Server Error");
  }
};
