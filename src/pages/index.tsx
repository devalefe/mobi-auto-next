import React from "react";
import { ContainerFlex, ContainerTextCenter, FormBox } from "../styles/home";
import { useEffect, useState } from "react";
import * as service from "../services";
import DataType from "../types";
import { useRouter } from "next/router";
import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import LoadScreen from "../components/LoadScreen/index";


const App = () => {
  const [brandList, setBrandList] = useState<DataType[]>();
  const [modelList, setModelList] = useState<DataType[]>();
  const [yearList, setYearList] = useState<DataType[]>();

  const [brand, setBrand] = useState<String>("");
  const [model, setModel] = useState<String>("");
  const [year, setYear] = useState<String>("");

  useEffect(() => {
    async function handleBrand() {
      let brands: DataType[] = await service.brandList();
      setBrandList(brands);
    }

    async function handleModel() {
      let { models, years } = await service.modelList(brand);
      setModelList(models);
      setYearList(years);
    }
    if (!brand) {
      handleBrand();
    }
    if (brand) {
      handleModel();
    }
  }, [brand]);

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
                onChange={(e) => setBrand(e.target.value)}
              >
                {brandList?.map(({ codigo, nome }, key) => {
                  return (
                    <MenuItem key={key} value={codigo}>
                      {nome}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            <FormControl fullWidth className="formInput">
              <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={model}
                label="Modelo"
                onChange={(e) => setModel(e.target.value)}
                disabled={brand ? false : true}
              >
                {modelList?.map(({ codigo, nome }, key) => {
                  return (
                    <MenuItem key={key} value={codigo}>
                      {nome}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            {brand && model && (
              <FormControl fullWidth className="formInput">
                <InputLabel id="demo-simple-select-label">Ano</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={year}
                  label="Ano"
                  onChange={(e) => setYear(e.target.value)}
                >
                  {yearList?.map(({ codigo, nome }, key) => {
                    return (
                      <MenuItem key={key} value={codigo}>
                        {nome}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            )}

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
