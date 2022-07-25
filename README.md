.COMSOLID é uma aplicação de investimentos que inicialmente contém as seguintes telas já implementadas: Splash-screen, login, cadastro, recuperação de senha, explorar investimentos, compra e venda. Foram implementadas rotas autenticadas para prover maior segurança ao usuário.

Para logar na aplicação é necessário inserir os seguintes dados:
  email: maria-p@gmail.com
  senha: 123456

Para rodar o servidor back-End mockado é necessário executar a seguinte linha de comando: `json-server -p 3001 ./src/assets/dataBase.json`

Foram utilizadas as seguintes bibliotecas externas:
  Sweetalert2: biblioteca de alertaas utilizada para os modals que aparecem na aplicação.
  Axios: biblioteca utilizada para ralizar requisições para o back-End
  Json-server: biblioteca que simula uma API REST a partir de um arquivo json