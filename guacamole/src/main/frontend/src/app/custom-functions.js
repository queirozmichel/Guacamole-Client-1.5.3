/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

//Chama a aplicação Cloud Login Handler passando o id do cliente obtido na URL
function callLoginPage() {
  const params = new URLSearchParams(window.location.href);
  window.location.href = "https://loginunicohml.engeman.com:30002/Home/SingleSignOnUri?customerSetupId=" + params.get("CsId");
}

//Realiza a limpeza das variáveis do Local Storage após realizar o login
function clearLocalStorage() {
  localStorage.removeItem("GUAC_AUTH");
  localStorage.removeItem("GUAC_PREFERENCES");
  localStorage.removeItem("GUAC_HISTORY");
}
