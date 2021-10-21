const express = require("express");
var path = require("path");
const { Template } = require("@walletpass/pass-js");

const router = express.Router();

const template = new Template("coupon", {
  passTypeIdentifier: "pass.com.ucc.coupon",
  teamIdentifier: "MXL",
  backgroundColor: "red",
  sharingProhibited: true,
  organizationName: "Unchained Carrot B.V."
});
template.setCertificate(`-----BEGIN CERTIFICATE-----
  MIIF5jCCBM6gAwIBAgIIZAO1amN6No4wDQYJKoZIhvcNAQEFBQAwgZYxCzAJBgNV
  BAYTAlVTMRMwEQYDVQQKDApBcHBsZSBJbmMuMSwwKgYDVQQLDCNBcHBsZSBXb3Js
  ZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9uczFEMEIGA1UEAww7QXBwbGUgV29ybGR3
  aWRlIERldmVsb3BlciBSZWxhdGlvbnMgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkw
  HhcNMjEwMjI3MTA1NjUyWhcNMjIwMjI3MTA1NjUyWjCBkzEjMCEGCgmSJomT8ixk
  AQEME3Bhc3MuY29tLnVjYy5jb3Vwb24xKjAoBgNVBAMMIVBhc3MgVHlwZSBJRDog
  cGFzcy5jb20udWNjLmNvdXBvbjETMBEGA1UECwwKSDYyVzQ5MzQ2UTEeMBwGA1UE
  CgwVVW5jaGFpbmVkIENhcnJvdCBCLlYuMQswCQYDVQQGEwJVUzCCASIwDQYJKoZI
  hvcNAQEBBQADggEPADCCAQoCggEBALD69EfncZK36tyWv1zY2vWZd8PY/HSS6tmc
  qqHgx75AF2joIp7TxA1CR//z2/ncvIxvxmJJiJQwfNTZZQJi8u2WxfXUEdlf5Urd
  g2LdtcVNV64Uq2QbqaHudXUWBECa0CqhdUtYdogER74RkkRSAlmQ0O0pASDt2AsM
  QvbP7wwH9jJqsT5YIGEINZSRU+Fivyf6XXoMzqt2jOSlBDLC8g90yC8WSwwJqAlu
  Cg4R142IK4eTTm3b9pyL4SnFeJBZyJuCZJS8QVpMBkPDrRbhHNKuBgPTP0AUvjWn
  Ik1Edz5uYBAuDYAsbD6joTCnbUIpq40wCUT9gZ3OYXlGLYLQ2TECAwEAAaOCAjcw
  ggIzMAkGA1UdEwQCMAAwHwYDVR0jBBgwFoAUiCcXCam2GGCL7Ou69kdZxVJUo7cw
  PQYIKwYBBQUHAQEEMTAvMC0GCCsGAQUFBzABhiFodHRwOi8vb2NzcC5hcHBsZS5j
  b20vb2NzcC13d2RyMDMwggEPBgNVHSAEggEGMIIBAjCB/wYJKoZIhvdjZAUBMIHx
  MCkGCCsGAQUFBwIBFh1odHRwOi8vd3d3LmFwcGxlLmNvbS9hcHBsZWNhLzCBwwYI
  KwYBBQUHAgIwgbYMgbNSZWxpYW5jZSBvbiB0aGlzIGNlcnRpZmljYXRlIGJ5IGFu
  eSBwYXJ0eSBhc3N1bWVzIGFjY2VwdGFuY2Ugb2YgdGhlIHRoZW4gYXBwbGljYWJs
  ZSBzdGFuZGFyZCB0ZXJtcyBhbmQgY29uZGl0aW9ucyBvZiB1c2UsIGNlcnRpZmlj
  YXRlIHBvbGljeSBhbmQgY2VydGlmaWNhdGlvbiBwcmFjdGljZSBzdGF0ZW1lbnRz
  LjAeBgNVHSUEFzAVBggrBgEFBQcDAgYJKoZIhvdjZAQOMDAGA1UdHwQpMCcwJaAj
  oCGGH2h0dHA6Ly9jcmwuYXBwbGUuY29tL3d3ZHJjYS5jcmwwHQYDVR0OBBYEFJMk
  QGShyEokk9poeIcMdVM9zsV3MAsGA1UdDwQEAwIHgDAQBgoqhkiG92NkBgMCBAIF
  ADAjBgoqhkiG92NkBgEQBBUME3Bhc3MuY29tLnVjYy5jb3Vwb24wDQYJKoZIhvcN
  AQEFBQADggEBAJNBi+rEIXQ6OfTtL7bExs6+6jR8vZ0kVITvd2mKfORrq+tEFTw2
  nFlAlUmCavj3HRjUG3yH1pDT737PKbKqzbvrNQqChb3xs60D5d7WU6Srk4zD3lH9
  wFCNrjXyKioKdP15ccjRbdYDYmM+ncJAxgrxSlIlXTMnHIOVGuku+Bwzw9b2f65j
  jkQXK4a9LslzpL60iX780uG5e/Yxz4wq1iDy22LRW/saTRcW/3xZnJ5eyl350HXr
  WAoBwZIU5GlvATSBn7PRp9C2aZt3Iv7PBb+Yd9nHd3fjTulB7LqMwQdghRHRIow0
  9nnvZnBPcQsI3zoySym3TpKJgaGSOB6GlvQ=
  -----END CERTIFICATE-----`);
template.setPrivateKey(`-----BEGIN PRIVATE KEY-----
  MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCw+vRH53GSt+rc
  lr9c2Nr1mXfD2Px0kurZnKqh4Me+QBdo6CKe08QNQkf/89v53LyMb8ZiSYiUMHzU
  2WUCYvLtlsX11BHZX+VK3YNi3bXFTVeuFKtkG6mh7nV1FgRAmtAqoXVLWHaIBEe+
  EZJEUgJZkNDtKQEg7dgLDEL2z+8MB/YyarE+WCBhCDWUkVPhYr8n+l16DM6rdozk
  pQQywvIPdMgvFksMCagJbgoOEdeNiCuHk05t2/aci+EpxXiQWcibgmSUvEFaTAZD
  w60W4RzSrgYD0z9AFL41pyJNRHc+bmAQLg2ALGw+o6Ewp21CKauNMAlE/YGdzmF5
  Ri2C0NkxAgMBAAECggEAXGChYWbNQWf+j2WgPTZ0E/4nJXL9U1vcefnsltJdcFDD
  515Ds+OVUdZm/pKrH6C4ShWN13/Kao9kmTVgI/7CDoHEkqw/JNeJN6qoCdLwLixQ
  t+zSCU7nHD770EHNtmsYfSgJsWpbdGPHjs5dKowj7dxJMYFVtXpwalPcIDgo7n3a
  CKa8VDqek8AQN44UxRiz5+qh8Z+/VS+EbxwfbOdvnuAbZjH/MU4ZSrrRW0OmDVs0
  xo6E/ZxbLJXygr5pfk5F6wY94NgJz99Oja0/NQ1BBBsxC8mpn6Dc0tfIfM0xbcIP
  s5Q5oEVbF0iDotKVSHpEbTJ5aYgxoJoZV2ydb5ScgQKBgQDARwaEN/LuRdFx/9HO
  6Ju0aSWX+YEbUfsOMnDN1+rc2jm8zBDHlu9PMfhCeXsP8JnJ6Zp/QiHAiGGH1mVx
  cyJhsrTZi4repFCDGBe3S/1viDN/OgxJ/PsPI93LAbfNlu4uLhevB4kBv3a8i0BK
  gj05VrBUKuORaEAkwsNUYNxfqwKBgQDrohsZL6cmgQBfivE8/ETRvteSSEGTV7Hn
  W4JpiQL5nvYeQhzxHOBQg34wyOCHTl+jOGjMNNFBRGlWgbTzQx2Bx+dXBD1Hl0Lj
  V8RKT3dEv9muApKXjrJBuIwR7rW/AWXfGhhs7QgH25YPqr6ahlU9eObfR5b7KMaP
  M3kc7s++kwKBgFhlDrDgS9WQ0W4YTqtRsqtpH3hTozAdK07mj4eCeR3ZUWvjYN9x
  G0mMTna5BINaeEkkFPvmOkAaMsRRI0fZx3ekwZG1nj0my0DJZbXFwJhyxEH8PMQT
  ApR+R6vZeVeRyKQAWrEDxM/B5uNdHUxjvaPLn7rCEOa7R6nexA/Zi9aLAoGAGSHL
  Hh6VB2hO7+HT5RtLA8wFFhca12pNEU4TVMpGRPWNbqDCkXzw9+VueimSuRvE25XS
  p6UihIGVcqKW+DM6XHND22YaWx5pBfKAfySGphCIWSTxGbUgkh3q4qbBP8QYZ3lT
  DZsidiQXl0gw2C5nvQy+IyZxlgw9UVy+GDXodn0CgYAFvrbQuik/3WK7YAG+Xoyz
  wP+EtLYtJsffjLYtg372m6BlDUodg4DOOB4zu8UhCN1JaZ2gsQ8/ycknDCbIZPWk
  tDIMULJucWEIjk4tmPtlwEN6JjJFnJUy0x3qv0ksdvsMO5z5wpBVKXLIPerRqFUH
  SWp4mZhuk1ZqPAwXn1vatQ==
  -----END PRIVATE KEY-----`);

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/pass", async function (req, res, next) {
  await template.images.add("icon", path.join(__dirname, "images", "icon.png"));

  await template.images.add("logo", path.join(__dirname, "images", "logo.png"));

  const pass = template.createPass({
    serialNumber: "123456",
    description: "20% off"
  });

  res.json({
    message: "Apple Pass Created",
    pass: await pass.asBuffer()
  });
});

module.exports = router;
