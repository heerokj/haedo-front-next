export type OrderRequest = {
  cmd: string;
  goodname: string;
  price: number;
  recvphone: string;
  memo?: string;
  reqaddr?: number;
  var1?: string;
  var2?: string;
  smsuse?: string;
  vccode?: string;
  returnurl?: string;
  amount_taxable?: number;
  amount_taxfree?: number;
  amount_vat?: number;
  openpaytype?: "KAKAO_PAY";
  checkretry?: string;
  recvemail?: string;
  skip_cstpage?: string;
  appurl?: string;
  subuserid?: string;
  buyerid?: string;
};

export const requestOrder = async (data: OrderRequest) => {
  const res = await fetch("/api/payapp/request", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("결제 요청 실패");
  }

  return res.json();
};
