"use strict";

const getList = async (str) => {
  return await fetch("/atlas/list",{title: str});
};