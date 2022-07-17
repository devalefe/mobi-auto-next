import React, { useEffect, useState } from "react";
import { ContainerFlex, ContainerTextCenter, FormBox } from "../styles/home";
import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useRouter } from "next/router";

import LoadScreen from "../components/LoadScreen";
import * as service from "../services";
import DataType from "../types";


const App = () => {
  const [brandList, setBrandList] = useState<DataType[]>();
  const [modelList, setModelList] = useState<DataType[]>();
  const [yearList, setYearList] = useState<DataType[]>();

  const [brand, setBrand] = useState<String>("");
  const [model, setModel] = useState<String>("");
  const [year, setYear] = useState<String>("");

  useEffect(() => {
    const handleBrand = async () => {
      let brands: DataType[] = await
        service.brandList();
      setBrandList(brands);
    }

    const handleModel = async () => {
      let models: DataType[] = await
        service.modelList(brand);
      setModelList(models);
    }

    const handleYears = async () => {
      let years: DataType[] = await
        service.yearList(brand, model);
      setYearList(years);
    }

    if (!brand) handleBrand();
    if (brand) handleModel();
    if (model) handleYears();
  }, [brand, model]);

  const router = useRouter();

  return (
    <ContainerFlex>
      {brandList ?
        <ContainerTextCenter>
          <h1>Tabela Fipe</h1>
          <h2>Consute o valor de um veículo de forma gratuita</h2>

          <FormBox>
            <FormControl fullWidth className="formInput">
              <InputLabel id="demo-simple-select-label">Marca</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={brand}
                label="Marca"
                onChange={({ target }) => {
                  setModel('');
                  setYear('');
                  setBrand(target.value)
                }}
              >
                {brandList?.map(
                  ({ codigo, nome }, key) => <MenuItem key={key} value={codigo}>{nome}</MenuItem>
                )}
              </Select>
            </FormControl>

            <FormControl fullWidth className="formInput">
              <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={model}
                label="Modelo"
                onChange={({ target }) => {
                  setYear('');
                  setModel(target.value)
                }}
                disabled={brand ? false : true}
              >
                {modelList?.map(
                  ({ codigo, nome }, key) => <MenuItem key={key} value={codigo}>{nome}</MenuItem>
                )}
              </Select>
            </FormControl>

            {brand && model &&
              <FormControl fullWidth className="formInput">
                <InputLabel id="demo-simple-select-label">Ano</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={year}
                  label="Ano"
                  onChange={({ target }) => setYear(target.value)}
                >
                  {yearList?.map(
                    ({ codigo, nome }, key) => <MenuItem key={key} value={codigo}>{nome}</MenuItem>
                  )}
                </Select>
              </FormControl>
            }

            <Button
              variant="contained"
              onClick={() => router.push(`results/${brand}/${model}/${year}`)}
              disabled={brand && model && year ? false : true}
            >
              Consultar preço
            </Button>
          </FormBox>
        </ContainerTextCenter> :
        <LoadScreen />}
    </ContainerFlex>
  );
};

export default App;
