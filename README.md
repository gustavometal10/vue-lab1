# dojo aprendendo vue

## topicos

1. instalação
2. configuração inicial
3. vuex
4. rotas
5. axios -> fazer requisições mock
6. jest -> test unitario

## instalação

```bash
sudo snap install node --channel=10/stable --classic
sudo npm i -g @vue/cli --scripts-prepend-node-path
```

## configuração inicial

obs> caso o snap reclame de permissao chmod -R user:user /home/user/node_modules

```bash
vue ui
npm i vuex-persistedstate --scripts-prepend-node-path --save
```

voce vera uma tela parecida com essa

![1](./pictures/2.png)

criar novo projeto

![2](./pictures/2.1.png)

mock url http://www.mocky.io/v2/5e3aff812f0000dce656c867