let nock = require('nock');

module.exports.testInfo = {}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3600,"ext_expires_in":3600,"access_token":"access_token"}, [ 'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  'c6060540-af8e-4d3f-a5bb-a2dc2d2f1400',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=AlCE3tHUNHtPkdZGHu4FEEA_aSJHCwAAAPJ9mtQOAAAA; expires=Thu, 18-Jul-2019 06:40:50 GMT; path=/; secure; HttpOnly',
  'Set-Cookie',
  'x-ms-gateway-slice=prod; path=/; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=ests; path=/; secure; HttpOnly',
  'Date',
  'Tue, 18 Jun 2019 06:40:49 GMT',
  'Connection',
  'close',
  'Content-Length',
  '1231' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .post('/keys/recoverKeyName/create', {"kty":"RSA"})
  .query(true)
  .reply(200, {"key":{"kid":"https://keyvault_name.vault.azure.net/keys/recoverKeyName/db53555d769d489e89a612b6e28258be","kty":"RSA","key_ops":["encrypt","decrypt","sign","verify","wrapKey","unwrapKey"],"n":"uOfMSJXvlpjd7QLNlIxAFJnv_ZF5ueeEmnFugr7xHcfi-IWLcr8PpC5GumImmRJ5DukBWJEDN23WQnAjSD9wN3lGRJuGYQIAd8sx9sdcVcmqwS7UUwReUAl9uqWBzas5kuS2aVZgD2hu6i4UfeJvA7vCioa3IZFlCOAPDQSMZbQz3ErKKmLDc75HjnkpE-WHDlCLghZLBftDZ47_Owe17rUH7FdNATzA0N-PBxPO-xKiTrRn12eM74gnsaCabxmO0STcpkeVTVWsYmzWBuAgas3HyCsvJRgeeDMj1YRObMHfkE0AL1tF_3jcF5UBIaWu8auV6Vt0duawWX0yQWLSrQ","e":"AQAB"},"attributes":{"enabled":true,"created":1560840050,"updated":1560840050,"recoveryLevel":"Recoverable+Purgeable"}}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '9685a6d0-5c2d-4868-9bd1-4bb053abeffc',
  'x-ms-keyvault-service-version',
  '1.1.0.866',
  'x-ms-keyvault-network-info',
  'addr=35.238.119.163;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Tue, 18 Jun 2019 06:40:50 GMT',
  'Connection',
  'close',
  'Content-Length',
  '660' ]);


nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3600,"ext_expires_in":3600,"access_token":"access_token"}, [ 'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  '52326d5f-804f-4e42-8a70-78bd001f6700',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=AlCE3tHUNHtPkdZGHu4FEEA_aSJHDAAAAPJ9mtQOAAAA; expires=Thu, 18-Jul-2019 06:40:50 GMT; path=/; secure; HttpOnly',
  'Set-Cookie',
  'x-ms-gateway-slice=prod; path=/; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=ests; path=/; secure; HttpOnly',
  'Date',
  'Tue, 18 Jun 2019 06:40:50 GMT',
  'Connection',
  'close',
  'Content-Length',
  '1231' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .post('/keys/recoverKeyName/backup')
  .query(true)
  .reply(200, {"value":"JkF6dXJlS2V5VmF1bHRLZXlCYWNrdXBWMS5taWNyb3NvZnQuY29tZXlKcmFXUWlPaUkwTXpnMVlqQTNZaTFrTlRRM0xUUXlaVFV0WVdVNVpTMDJNVEJrWXpNNVpHWmhaamdpTENKaGJHY2lPaUpTVTBFdFQwRkZVQ0lzSW1WdVl5STZJa0V4TWpoRFFrTXRTRk15TlRZaWZRLnF0N0w2UlZuMm1KT1hzaG53QktsLWZlR295RHNlbUR5LV9WM0RvaHJSR0FhaDhwVFdOYkVIRm1iRmJXYlJSWXl2OEJsVXIwZnp5MWc3Z0xmZUlUQ19rZkU3UC1yM3lORWxqblZ4MmdvQU5IZXE3N2Z0YnYyQlo1Nld3YWxuM3B5c1JmaVpndzdsNWR4a3lCNENFNFJQU0IybXVkMFltcGNwd3lmcVhzcGJUaHYxYVB0YkJ3Sm5tOXZLZjRtY2tNVkJLRG12cXFhaHN5bDNEdGpvNDhmbWl2cXpjRUtNZFNwTlhTeU1ISE82TGctV2lkNlRULVFPN0JNT0hUMy05ZjAxREtTMUNsUnRwYnItZ0p3LUQ3ZDZpUUtkZndDRGxuMEtUR0gwdlR2Q0xBMjZqd2JmZkpFdmszVXYzR2doeXlqeXA3SXhxemxvcE5PNEJrdXVidEdZdy5yRTZpQTY0bjlwUnNJZW5oWDZuN1JBLmRnNlEyZ2ZLeV9paG1ObEc2Yy03NzVZYTBLdnRDYnJPWkV4anA0R3gxTklOVG1aSUVGZTVhaXFiVE4tN2ZJQlBIdEZRVDdJT2oybW9ZS09SZENQZ1lyWDBvQUZidnBETk5ndXJFU003RllfTW50SVo0WER1ZVNMeVVTQzRXenYxRUdjb1FLaFRCNDBrSThQSi1RcUMyV0tZN1l0N1pPOE90VE5neHlrYWZXUDl4b0U3OFV5ZGktUTFkSWVfSm9wUjVlc2FuWEFxeURSbmYxV1d0OFRKNWxtRzdQQWNIbXB2WDlXZFZNYmlTSkZuM0tLZFdsMkdaeE1DYWV5OXlpUkp4SkZKQnlEbFQ5dC1Cb0VGNnplUDNMbF92YVo2RGpsUnEwb2FkVXB0T2pDWW82MWNDSUdEdEJtZTNaYUJfWV9yV05BYmpsX2VIbEdxYlVaSFhZU0JjZlduaXBQWndELTdtVGJfcXNTV3pyb1ljaEItak5FcmdHaUQxOERwZGcyRG5OcUJ5ZUFzdmtFeHBXMU9pRzFzcTJVaWh5T3owOFJmeG5PMHMyNTRaUE01dlFmakVPWmotdGljd0VONmtYUHBjNno2V201NW1BTEpqWXNETnNoVUlVRzdKaUFpOFhSaGdNcUR5RUd5aHNFTUl2WjU2bXV0V3pyVmdhT0lyLWRSR2FDQUVTVjh3ekZ1THAtQ0hyWHFlSlh4bzRxTkpoRjN0czVEa0trdTJmX0dkdjBSOUMzNTlEdFhoaWxONFpKM1dpVlV0TXVRS1NVR1J6blFNemJTdjZUd1lZcmtCZWpRelpQVVpmUVRDTmEtcnFFVmFsb2ItRU1yUTFxdGhVZjNoSEQ3bk94VVRmb0QyVl9yTmR5Wkc3Z1FQUndGVlpRR0RqLUo2SWNVS3JvX2U0cmJmWjE4VXlvdkZLYUlTR1FXUmRsSUkxOUtvVHkzTEd6ZDhDZVdIbUdzdC1oZ2o1MjlsOGRrdnRTckxVLTQ2OURLWHA2ZGptUDk1b1JrRXAtYmxZQXhlTkxHRWJnSnRWX3NRaFRZSlNaamk1akJWTzVSUlFCRTMzVmpfRVU5VWZYMHgteC1MczBnczZjZm9SZ0tpUHFUdEtBdmNPOGdlVTVkN2Q4QlFGaEVVM19aTi1pZ3E3UDhPMGZ4T1dEREY4SVRoM040bVBDSGk0YWFTbU5xUXdLcXExMlFtQWFEbXdQbk1JLThKMHhkLTFoWTRCbmtwa1ZRVW5XUFlzbXk2VXZ2bktXR040QjVwY056YmhPUlE2SWFqdDBZWnVmMF9rcHB1RjI0RzhGS2FSTE9ZNl9pdnFPVG92U1ZBMHMyclZDb1E3UGtRbnVHNjBQeUh0emR1cktmOUhMUXpxXzllQnhLdklzZVU0TU9UclhOWnJJNEhyMkVtTGsxdDd3WEctRzhnN3FfdzUtaHBVZEZFc0RTalVKeUh0RFhYbnVhSnRFdU9oWS1nMEtKWHRmX1pCLW1ZSjJvZlNwd1FYUFFoemRkM2Y2ZEN1ekg3NnZrOHRvUGstQkZRMFZnRzVnZjdKN2p5VkF6NnZVSzRGR05fRHBtdzdUb2xnczNhbDZfdExEVUlqemx5NVhzUlowM1NPQ0E0VkVxM3JFQm9zejBtNzU3QURyRXFiR1dfNWlnRHlZSFlTMDJqZnN0WFRTR3RRbFJpX0JEYmRUSVNubHFVUVhMUHZLYkdyTG5nT2VRVkYya1gtcWVidWNncDViLVVFTnhFbDl3Rk9GOWVGRWpUdmEtSFBYQ0YxbnFYdUtSeHpwMENkWFJvWGY3ZS1BMzVLVzloZlh2bUZSSGFfVTNfZ0doYU9UdlJhd3B6SDVkcUtUQ1RJeGNOSmhjOExsQ0ZfbHpub0ZvV1Jkbl9zb0RBS2FIU0k2elFjWjVhMzE3a0FESWxaN001eHNDS2dvdDQwRkVWTFd3SXhOTHByRkxsMWhkVGFfR2M3TFprcy1Hb2lmcUh1aHB5azQySUtKSF9ETHdsY2ZXRVFoNlhDTWFEV21wUzMwSXFtRmhUWDZxeUlsc2U2LURLMXhsR0xmaE9HcUpYNFNob1JVME9zRmpFMjdOaVFXS3Y5R0JSZ2w3Njg5MEM2WE5feWl3TnNuM0FoQ0g4MmNZRFk2ckhabG1xSlBaOXVWSXRRb1RpVzItR29MQUlrbTZtRTBmLXlBWEdyQ0k1RkRmY3JHTU1feno2NEc0LUx6U19zZV9tbkxISkhpY0hmN294MGYySmh5UGx3TE5kdHRJeHp4TTNxdFZiNV9wdm52ZVN0d0VLVmQ4bnRuWnByckt6RDRWalAxUlNNekNQU1BRXzlKQVUwU0x2Rmtla0FhSXh2cnAxU1duQWZGNzViaklHSjU2cDFNWVJKZ2NEcjdpMTNSeFhkeElwaGktY2VwZjVsRUYtdUJhMUpIaVZJNXBlNlh4QUY5cEp6bFpiWjRLM2xHVm5qVjlrTnV5SElEZXdGeGFvdDJnMDhuTk85dWd3b0gyT2xiNVRLOXBnWkNkZEZ4M2h6WHFxUzJlcS1hOWlTYWFzZ2plbEYtd2xZWGxFYjAyZUw4T3NyTXI3VHN1TV9RTnNDQnJJR3g2elk3Z2xRNXhBR3pPeVpiYUlyMGs3Q3ZtLWpJWF9kZ3FKTFp2UExZRG1PUS1ja1pEOHB5TWUzVVk2djVxMEUzS0psajdxNl9FdjhyaE5XLU5WWGk1T1JNWTBoMVNCdE9jb2dza29HazZyQkxjd01aSlFxbFhLc1BpaWFJZnVQQjcyVi1EWGIwVHd3eVRZVGl5c3U3eVpPNV9Ubm1FdUVWS0QxWFJTMENvSmpEUkQ2SEp3eGFZUjJnYnBfSTNZWS11ZGdHZ0s5MXlVNnR1VjliSUVGc0tRREZuRDY3dFJILWloWTc1QW1nbnlVZEFiQzRhOVZFbDJTMlVBN09IRndnOG9oMUJ3NUpyYnBwTWFNTi1KR2t2bXFWbm0xRWttZlZBbTJQNkE5UTRSUEhrMHhSV0Rfc1JfaXB4VEZjZ1g5cDhqRDY1MFhyTkhLekpSUGJUV29aNk5sWF9NQ3NzWkFOSkk2ai1fVWlLWkUtc3NZZHZieE9VbDBuOFNuUVc3ZUtmX2FTendqS1NUczc3NFVtNW1Xcl9uTWFlOG93RGNHUG5Pb0RjMHV1eXBGb3VrREk2dGR4QW8xZUNDQlhMcEZob0luSWxsNHB0ZGFlVlo2U3UyeV9vZ3BPNjlRSkFYdGM1cW5ZdV9mQnZwcDFXNERxVnVwd0Z5ZnNmMFBxUG0tSkxnZDFvYkVXNU00RkJTZEl4UDFReUlySnk1QzhHWHdNcDlncldXeURaZUVhVm13eThheXI5c0lNUDhhQVRwd2VkTTlKR1RiZEpCM0Q0MTJnekE4R0Nybm1iMFFOOXBJNVcyVnpjNTAxYnlERGJjSlpSWS1acEg4U0VBMHB5Y291R2JoajN6S0FXcUpfQ0x2SFVJVUREdXJab1k2N2hWTFZZWmJFNElIUnRLQ2lMQ25sRUVOb29NU2RFSUtDbHFfYUVLbXFXd1J5b3FXYjZfcGJsbUZfWFB1VlNWYnFIbGF6SmFrdHlBTUFXUVRJR1ltNzlDT3BFOXAtOHpMU3hpRUVXTmxDbEQ0VW1ERnExSnBGcDQxd2RxY1dQWXVUeVduSF9fWUNXaktCRGJVZG5hTWRLWHh0d2JuWld0RTlaQlNaTmEyZFV6WGdHM0kyNTdzNGlFTzJHOUpEalc5VE5FZkNlYk9MeFVvTVRTaVNNWWJfRUtCWXo5TzFSU3pwN2xOc0dwQnFreFY5X0h1M09MUFFvRHhkQWttYTN5STR2eUlWdmd1elptSFNLelhvRE1jVGhCZGZRWlNJeDJYa0RkTGU2b1FVQ0lPaU9STzFkbDJJY2hPY3hyWFk1d3pOdlh6RXVDMDZQRHZCTzUyZjUyX0lXU0hzTnBVU1NoR3Z2WHR0UkNKRkU3NVdySmRsVmhVY3ZrbEtqTXA2NEFjSzA0alc4N2RXTDA4Sm5lRlBJM2k5NjUwdDhLejlWdk93VTAwMExmdllZWi1QYXNhWWZmanZNbUt1V09xVHJlaFRqclByOWdCUGN6RlZYbDQ2WjF2dkVkeElNN09tQThDZE1KOHpiRnd4VUNHTWg0RjRSbmZCdzBrelhISHBZNDQ2NDREU0Z0Tm91VFVLM0JpampNMjZsV1NjZmFOTG12M2JQYkc0SUNxa0Jpd2dGSEt6T214eVItLXE2SGN2OGx2Z1VVb2ROOFVpQWZlREtBejFoVm5XOWxxbE5kZkl0ZV9RbE1BUmNVMkx5cUdPVm5RN1RSUWdBT1BDOG5pSWFjSzMtTHNaM0ExYWtzTGJCalhnM2dGRkZHQzdEQUNxSU1QTVBNc0JvRGhoOUE5MUNYRVV1NGh4Nk9TSmZzNkZPb3RVWE1LZjM4WkVWYkRUV0ZVMHc5SzNkT0tVQ2ZFOFY5ZDhoS2gtTWdVRGRqYjVsNnAxSlBSQk9QUTc4bl9KSzNzQlMzbnhqNEkzZmp5Q210dUt0TWlDUnRTMXZURktJaFpjYmszaVE1VXpKUTF6dUZaZzhmVHNqWXlDU0Q1bEViemVZREF1WUNMRDRWME1FNzZ2V0M5d0FNdU9la2U1UWg1cGRGN0MzcGF4Y2ZQSlhCLVp0RmczSUFGTDRPcnpxZVpQLVpMcVl2SnRJTU4tdXEzbkJuU1N6d2lrTHVvNHZhNktuMElXbGFxRUsyQS00SmZWNFJEQ0lFUEQ1a0JaMzQ5ekhkMEdmRW9VcnppeENSaHE4WWIyWU5JMmtNU0Vwek9paUhOMFE0V2FVSm9UVDJySGZLaEhuUFo4VHlZY25objBUOTlHUGJFZ1o3REZKY3MyeHpoRDJqWnpJMFoxNG5IQTV2QkFoWGI1MjR6SjJwZXh6bmVvdHEyUl9YeW1Hb01SX2FvSEsxdmdZaVlqX0hHWHFSd0ZLUGJ2bUhfSVVqRXhpTGlxSTBvaVFfLXptbjg3QlFQZEUyRVlWQW92dkVqVVBKcVZGT1EyYlVnNGVGYkVENWh6eE5CbFRwSkVXMWdoMC1kbjBDWDZNN1NFVWliR0x3VUpIN296enJFQnBKMHdURFhsZl93WXpoYVB4cGRjNldLeWhsQm53U3FJZjJPaGUxZWpLQUhyUFlqeEIyczVOUTY0eGc1TzVwekxDSWRLcDRfUVdSV09FVGdadnYyRVJhZ1BCdkhnT1EzSVBUbC0xb0tQZkRlRHcteFJid3lvWlVRQzdYdTZuSWVCMW9SY0ZWTjMyXzBXTTBZNU1uaXpZZmRvZjZycXBvck9EX2lMa1dsNjJfZTJPU2hhTTRUS3U5NjQ5T1dhbkNDaU9VRjNIbzRQTzM1WXZTbl9Db3BCRVg0eWxLZDBmRGcwTFFqdEdkVVBVaTExa0NwV2RaNGtnOTROSS1aOWJiOFAyYlVTcUU5VVpaTU5UWlloT2lPSmozVXZjc0VJaFFQbTNPSjQwRU5mOXIybFNuWEFMT1o1akxZUkcxV3VPUVE1SENZXzhuZjZod3RXNFF4MWlueWdhOGpQQXZUdmdLbjFPbWVhVWdvcTBsUU9fYnFyajAwdUxoa2NkYjJ1RGx5MDlZNzh3UXRvelR5UWdYM2hOUnRZdURFZUN6MUdYTGhtOVlva0FvVG40dmI3eDhNd2xfZzh3VlRuZ2k4a1JlSUFFdHV2MmZHMWNhUFBDQ1hKVXFUZ2ZpaXJzd3owMVNldzBBVDVTOUxqR0VPVmhBcEZlNFZqak1HYWdrdGVaaXAya2NPdTJZZEJpNTV0UzRfT0tVUjRaQUVhUDNuVnEwclJyNHdQdW13bjdMdHRyaVAtNEViWXJUMzJHVUxSc29SQ2R4UlRleG9jXzhBcTBjd0VJYlo3V3owOEVqOU1fWFk5Wi1FZEhEOFAxcmRaMkZIWDNsc3R4RktPMFZ2QUtET1JrNnBjNGtfX1hDcFBIcEFRVk1ITkdId0tLbk9WY3FuYjNxQ1I2MGQzT3JMdWRYV1ZZbGpQOWltSldGOVhEWHk5NlJteFVMMUVibTZZR2RTNWlNbEdrczV6aUdkd1d1SnhISVdSZWZwc2MzUXVfREdMQWZBcGhpbmtORzJvd0ktVnQ3Rk1HYWRCMG1KRzh6OHlPNG1QSkxtb2t2T09QMzFBUFdrb3hQc2g1NjQ3ZTNna1lmdWNwTzdRcEtwTG9ZSHRHTXgxNkZYZS1vTXk4bkZmLW1LV0JDcTJ1RURYcWlVWHpjS0dQalZxdWNSclZnM3ZEaDUzczkycmhEdVRXc3NVWkZQRWMxNFk3YU42S0t4cTJ2SndNTHNpelJmOE40OUtPRnI4ZjdPS1NFOUIxYjVIWkN1ZDRvSGNKWmdfRUpYNXhWYUZIZXV1WE1Sa1FfclN4c09wM3Y1eHFtWklwQmxBX2dSbGprRWdiWU12RWpUeE1XV2xCeUlYV01FM3BxNEZ2b2pqQ01Hd1RCU0RPVFBiYUcxU0dEUXpDdUYycjZIWk9uc05OZ2VQSDIwQ1gwdm9CSjFFcnB1WVQzQTJpOWsxTVR0c1ZNb19FTDVmNXlZVUdlT2txaTdwaHdESHpSR0tBS29xdFE4dlZLdm9sR3hOc01CeWNVTUNneUZJT3JrS0wxZFdaTWhvMDRGOFFJbjBkVy1JVDk1Tkc0MmRoMm82S0I1c3k3R2ZBZVRzUXlTNWxTTEdFTnNUWVBpbFhXdTRUWmJwVXd6LUpYdWVPRFR4VFQ2RC1BRlpnX2FEV3djV01yTXByLUhKNW5GbzNvbGZEV3l5bDQ5YUttYzFtSmpDWE1FcTFhNGVBZWpQdFFFX0tJeF9FN1NYQlB0bVNZQXBTZFR5Z2NabEZoYzlwRm1PX1NjMzJOeWhqTjBmT2pSakVnSWZ4NFIycFo3VmZleWR1NHRmMXVoNmxfRkVLdXNqMFVEbjFNQ2RKWDREQU5ObjhfcG5hbm1qNmxvSklnV0dLeDVwTG95eXA2TjEyVFlBN0ZNQnk0WXBEM3J2RFpDaHRCOTlGRlRpNXpCNDVsY3RTLV9UWUZxRkVPWFRzZVRQUEtvTXVialRTTXUyRDVDckI1Y0tDblI1X0M1SnhUaGRTUWk0dnpaTUJzTXIzb3p0SmV2NDlXQkZDal9SRnlrcFVqdzZOS1ZzQWRIZ05jTGxkUC1UY3pmR0dpYXZycGFDYi1wQ1hxYm5CakhnWGVUSHZSUEs3YnBfOGlQaVlURDl5SWxJNFN1d2YwaEZFODhoQktfazNraG1kc19hYkx0NDR2cVpnTkwyNV81d2NTempJT0RiTm9lbnEyY09PQ1Y5NWlxYTd2MWxOVmVBeWYxZ1Y3a00xMGlUcEN6RWU1MWE1TzVDaGRJcWlqRkJHTjlGOVg4b3Yta3Btc1VHd0VXaG5lUVlpSmJ0WkhDaVVsUlE0Zk9iVzFJWVlqX1lUZXBlQm9NWHJSRFBuc3duZVQyYmZlSENfdnBKbGxNTFZCeWZxb1djTFoxRFp6MzY5bW9sLXVfRk8wRDZkaVJVaVByNUtaLTdPMkE4RHJqVVNkRTVOYlFmUUFTRnI5NnpodG9WSU4xbGt6WUsxWlY0a0dmTks1a2VtNzV2eWFJTG95WUdWYkR4ZlZTNU5HS09iZEZCUDZWS1lsckhFLW5JT3RwMHVHMW5hLWR5TE9WN2QyQmdlNE5FNWI2UkFZNk8yelJ6RmVTX0pURl8zQnRHdFdRZktFRzlDTllrb1JzY3FiYW1DTzhqMC1zNHNkdFprbmp4Sk9uWUNQMkFRZDVneWlQUE1Wd2JuZDc4ZzZ5SE11N2FPRHBFX2UzRzM1QVpmUFBDVl91aWQybEpQZmxEUWEzVEtwcGZPRktZVkVNX2Z0UFkwdmw2dWhyaXNXVEo4aVBoalM2Qlo4ZFdEVWhDOG5qOE5hU2wzT1pBbE43eVRrMVItcUk5T0t1WXoyN1NfNUcyNUdBSE9xUFRnS0VwaExFbTlHb2VRaGZsMXEyTTJ0d2FPamtEQlR1ai1PbXBPQmhaaXktTHFIeXFERGVFTDRlcjlDQW1RWnQ4U1RydExsZFdaR016OW9tLWFxbG1hcEk3b1l0LTZPNkZKWWtMLVozcElJeTdIQThfQVl2V0pOLUt0c1Rybm04cmhJdWNzZ3lGNElCLWRZVjlCT09zUW1JYnZobmdqSWlkQXEyc0dMd1hrU3gtSkZDRXhRWXhtS05ib3VzOUthdjhtRTRPRHY2UDEtb29aSnFuVnEzSnhJLW1nMEp5WnY3R21kd3QtWXB6QmlBNlZHY3VsZ1A0ZVJMNDcxOXE5c1N5RWYxN0lwZ0x5eU9FVUFRVzgyaGRTTkN6cGsyVG9jSW9wQmhMMjMyQzRXYzR5b1h2OHJrbmhJaUFreC1JR1pFTnNSTDktTGptWVdoQXUzYi1QZFVSV2sxNnlGUF9PM21yWktrNlFYZFR6R1FSbVUweEN2dVYtV2hJcjhQV20tMUFXcHdETjB4R1NwU21qVmVYdWhzdTY0NEFnalJyUUl3TVZiNF94eldCMXZOTzBkWmI0b0JVaWRxc0dGWW9JUmNVUXRfNWNUcjdSRWJ4ODItZERNWFJJZUNwUGVqTmxnTEUzdXJoSXRoX1d2YXBpdmNrM0tJblQ1eWpMWFl1dkYwYmVFRzFqZHdYdXBCb2ZEMGtHWVkxeExYRW9HYWEtVVBxTl9ONl9SNjZBQzRMZHgxWEV1ZzNGSFk1YnpZQlc1T183ci1TZWFteThvSUJPTFF4UWpGWlNXUi1NMWN6a2liV1J0RHVwZDFuVFRaRVpfX0Q2X2szYTB2bmthSjVtWlZSZlFDQUlhQ0p6eVdCTWdMLVVjQjUzSXdDSDAzbThINE82RmZ5cEc3OGhHamZQWXhXa1pUaWwxc3VZd0t6U1h0TlVLX2U0QVdyaDdmVnE0amdrNFJxWU1mVnJBR1ZCSkx1ZF9YZUF6SXc1a1V6WDcxTlcxakREOFFDaElvZTRiSGVuWEs5UTZXNm0wQkY4U0JKMFNabEVYY3VHRVRudF9ZazdHX0FYdnp5MEFIRGQ4V0Z4b2VFREdGSW82OFVWcXBSX0o3QU9WREE1V2JpZW4yVDdGUFlPb0pwdTdfOHJOa1VXcFBwaC1tcnFpbEFhb1Vfb0VHTGpuQVpIbzZxOFVOUHFwZV93aGFyM2k2X0NMSEZ4Z0tRc002N3otOUpfRUVDcGJGU0Y5VmVNTTdfaDBTbUR3RnJkemFuNm5jQ0JuRUNCd2NUMGxmeVNTOHpnZy0yTFFZdkJxc1lqb1J3TWtmTnF1MVh6OFZQQzRJV0NKc09HTjdicW1rQ01zcGFhNE5LZHVwMVh3dkZCVHF6TTZaMHpiUlJVTDFnMGpWTko2cmhJT2N2RWdRd3Z2WXRvTUZmaVpXcjNxcHBiQmF2aERRVzAxbUwwNkxKYWMyVE15RTV3c1c5Tk5YSnF2OG03emdJQVUydG54VkQwcl9ZMXU1OVBwQlNBTVJYeHU2Y2s0bE1Rb1BaS0x3cDBtbllpOEdUSXNGMmh2RGJ3YVZDc0IwOUJDbmg5WjhHRVJNdUdLMFAyZjdYa0RaUlQ2MlVLVFJISE1vSHNwUkM3cjNIbGhDVTl2NUpCUnhSVzJPOG1VeFd6UUlLZWFtRFhYZUxZYUE3UExyTHFub0NJM1lWVTBpb0NkcTd2dlBKRGRwbG43SU5WMHV3V1U1cGt0UUJpMG9aZGFCcjVCSmFmcU1QbjJ0cG9VdGxPSTR3bEd5TkhidXdJc0FUY2tpWmZYaENDUWRrNndQQlRWNGNtbmZMRk1xUFZzLTNyWjdMVk5KeUFwUGg5dTB3SkVJOUNUbEMtTXRjMTZrUW05UXpsUEUwY1gzbHVrVDFPSkdVNkdyaDdRUy1SaTJoeE4zaERrYjJjcnhmaEtKdEdPVi01RXd4bDZQYTZXRjZiNVZQekt1TVgzQVB6WjVLRElwcnRJNFJaLUR2RVBEOE95SHduZzZEODFldWxxQms2S2RRb3ZyWURBZm1ETHRycTBWRlNuUURNT0hIejdpRi04eVBYbTdlRnZxOFRUVmlOaUpyTlJ3dnl6WHdkeDhEQnZkNFNqMHFBZjFIUU5oVmpDd2N4TmplVHlBd0pqWG5vYlNpeTF2MzhfYUpPNXBwUmlOYjNkUDNMdEljRWItSUU1djZQQllpbEh4VExfSXJwX3ZUVkhKQ0pRblNCQ1Brcm9PNC1XcTJzbzh6Q1d2WmJHTEtRaFpSdTRMMFRPM3lOcHhLOUlTQ2pSRWZUNkhyZG1UcnBsTV9YdmVKN25RUmdqaWpzVXJueTVmMlk1TmRDWWI1NVh0dElJMUp0cHg2bEkxWnNPZnl5VHBWNUJwTUh3Z2t0TGgwdkdXdjJWMkJZY3B6czQtemIxYkxUTDR2eXlIT1cwUlN2Z2NoMGxwQWhHZzZLekMzZ0dMdExHMFU3QTk0MkVSWDZSblNyWmdLWi1lenMzLTVEVW9MQTRFYmNtbG5iUzFwbFRGYnBjQnh5LTNZV1pMVzl4dXNvWUxsSTVfNTlBNVMwaG9LeGJrN1VVX3BIVC0zSUhSamc5RmdKLXFyc3hLTV9XVUJwUGVqNVJIWEtJT1A2Ty1qWXRZZTQ0eWQ2dFZZai13XzZWWm4zaWRtT3NtMHZhVmVBdWNLWC1jdVlHOGc4dHI4SDdNVG9vOW01TzM1S0tiNEMxY2Z1d3BiWEZqaTZXbFZqUzZwZVcyc2lWeW1Ta3hxUmYwOTBEVDg3LUNITUZsSnVSemlrcWcubTI4SnVCOUlhQ001bDJLM0lKZlFkZw"}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '2acc3cde-ecfb-411f-8243-f324807c65fd',
  'x-ms-keyvault-service-version',
  '1.1.0.866',
  'x-ms-keyvault-network-info',
  'addr=35.238.119.163;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Tue, 18 Jun 2019 06:40:50 GMT',
  'Connection',
  'close',
  'Content-Length',
  '11518' ]);


nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3600,"ext_expires_in":3600,"access_token":"access_token"}, [ 'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  'bdfad1b2-f49f-4607-8530-6f4cb8307a00',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=AlCE3tHUNHtPkdZGHu4FEEA_aSJHDQAAAPJ9mtQOAAAA; expires=Thu, 18-Jul-2019 06:40:51 GMT; path=/; secure; HttpOnly',
  'Set-Cookie',
  'x-ms-gateway-slice=prod; path=/; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=ests; path=/; secure; HttpOnly',
  'Date',
  'Tue, 18 Jun 2019 06:40:51 GMT',
  'Connection',
  'close',
  'Content-Length',
  '1231' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .delete('/keys/recoverKeyName')
  .query(true)
  .reply(200, {"recoveryId":"https://keyvault_name.vault.azure.net/deletedkeys/recoverKeyName","deletedDate":1560840051,"scheduledPurgeDate":1568616051,"key":{"kid":"https://keyvault_name.vault.azure.net/keys/recoverKeyName/db53555d769d489e89a612b6e28258be","kty":"RSA","key_ops":["encrypt","decrypt","sign","verify","wrapKey","unwrapKey"],"n":"uOfMSJXvlpjd7QLNlIxAFJnv_ZF5ueeEmnFugr7xHcfi-IWLcr8PpC5GumImmRJ5DukBWJEDN23WQnAjSD9wN3lGRJuGYQIAd8sx9sdcVcmqwS7UUwReUAl9uqWBzas5kuS2aVZgD2hu6i4UfeJvA7vCioa3IZFlCOAPDQSMZbQz3ErKKmLDc75HjnkpE-WHDlCLghZLBftDZ47_Owe17rUH7FdNATzA0N-PBxPO-xKiTrRn12eM74gnsaCabxmO0STcpkeVTVWsYmzWBuAgas3HyCsvJRgeeDMj1YRObMHfkE0AL1tF_3jcF5UBIaWu8auV6Vt0duawWX0yQWLSrQ","e":"AQAB"},"attributes":{"enabled":true,"created":1560840050,"updated":1560840050,"recoveryLevel":"Recoverable+Purgeable"}}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '45fc317b-e653-4b18-9d18-0e0ecf568bae',
  'x-ms-keyvault-service-version',
  '1.1.0.866',
  'x-ms-keyvault-network-info',
  'addr=35.238.119.163;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Tue, 18 Jun 2019 06:40:51 GMT',
  'Connection',
  'close',
  'Content-Length',
  '795' ]);


nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3600,"ext_expires_in":3600,"access_token":"access_token"}, [ 'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  '088a34d8-22c7-48b6-94e4-fe8385691300',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=AlCE3tHUNHtPkdZGHu4FEEA_aSJHDgAAAPJ9mtQOAAAA; expires=Thu, 18-Jul-2019 06:41:21 GMT; path=/; secure; HttpOnly',
  'Set-Cookie',
  'x-ms-gateway-slice=prod; path=/; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=ests; path=/; secure; HttpOnly',
  'Date',
  'Tue, 18 Jun 2019 06:41:21 GMT',
  'Connection',
  'close',
  'Content-Length',
  '1231' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .delete('/deletedkeys/recoverKeyName')
  .query(true)
  .reply(204, "", [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '48edb1bd-4c02-494f-8546-c4957d3ccefa',
  'x-ms-keyvault-service-version',
  '1.1.0.866',
  'x-ms-keyvault-network-info',
  'addr=35.238.119.163;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Tue, 18 Jun 2019 06:41:21 GMT',
  'Connection',
  'close' ]);
