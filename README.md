# Aplicativo varzea

Projeto de frontend do aplicativo da SoftCompany, desenvolvido utilizando Ionic 5 + Angular 8.

## Instalação

Após clonar o repositório para o seu workspace, utilize o npm para fazer a instalação:

```bash
npm install
```

## Utilização

Para subir a aplicação localmente no browser, utilize o "ionic serve". Desta forma a aplicação subirá (default):

```bash
ionic serve
```

Para subir a aplicação no android através do cabo usb **** utilize:

```bash
ionic cordova run android
```


## Build

O build deve ser feito de acordo com o ambiente que a aplicação será utilizada. O modelo atual possui 2 ambientes possíveis:

- dev: utilizado apenas para testes locais;
- prod: ambiente de PROD.

Para fazer o build:

```bash
ionic cordova build android --{environment}
```
