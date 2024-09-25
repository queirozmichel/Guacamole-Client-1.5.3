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

//Redireciona para a respectiva URL do Login Único do cliente.
function callLoginPage() {
  const params = new URLSearchParams(window.location.href);
  if (sessionStorage.getItem("URL") !== null) {
    window.location.href = atob(sessionStorage.getItem("URL"));
  } else {
    window.location.href = "/";
  }
}

///Define a variável de sessão URL
function defineSessionStorage() {
  const params = new URLSearchParams(window.location.href);
  if (sessionStorage.getItem("URL") === null && params.get("Url") !== null) {
    sessionStorage.setItem("URL", params.get("Url"));
  }
}

//Realiza a limpeza das variáveis do Local Storage
function clearLocalStorage() {
  localStorage.removeItem("GUAC_AUTH");
  localStorage.removeItem("GUAC_PREFERENCES");
  localStorage.removeItem("GUAC_HISTORY");
}

////Realiza a limpeza das variáveis do Session Storage
function clearSessionStorage() {
  sessionStorage.removeItem("URL");
}
