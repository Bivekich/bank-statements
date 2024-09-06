import React from "react";
import {
  Document,
  Image,
  Page,
  Text,
  View,
  Font,
  StyleSheet,
} from "@react-pdf/renderer";

import Styles from "./Styles";

const host = window.location.origin;

const styles = StyleSheet.create(Styles);

const SimpleDocument = ({ bank, userType, formData, transactions, period }) => {
  let deposits = new Array();
  let withdrawals = new Array();
  let checks = new Array();
  let daily_balances = new Array();
  transactions.map((item) => {
    if (item.type == "deposit") {
      deposits.push(item);
    } else if (item.type == "withdrawal") {
      withdrawals.push(item);
    } else if (item.type == "check") {
      item.check = item.description;
      checks.push(item);
    } else if (item.type == "daily_balances") {
      daily_balances.push(item);
    }
  });
  const beggining_summ = formData.beggining_summ;
  const ending_summ = formData.ending_summ;
  const deposits_summ = formData.deposits_summ;
  const withdrawals_summ = formData.withdrawals_summ;
  const checks_summ = formData.checks_summ;
  const service_summ = formData.service_summ;
  const beggining_date = period.start;
  const ending_date = period.end;
  const account_number = formData.account_number;
  const average_ledge_balance = formData.average_ledge_balance;

  let checks1 = new Array();
  let checks2 = new Array();
  checks.map((item, index) => {
    if (index % 2 == 0) {
      checks1.push(item);
    } else {
      checks2.push(item);
    }
  });

  let daily_balances1 = new Array();
  let daily_balances2 = new Array();
  let daily_balances3 = new Array();
  daily_balances.map((item, index) => {
    if (index % 3 == 0) {
      daily_balances1.push(item);
    } else if (index % 3 == 1) {
      daily_balances2.push(item);
    } else {
      daily_balances3.push(item);
    }
  });
  const continue_on_next_withdraws_h =
    150 + deposits.length * 25 + 80 + withdrawals.length * 25;
  const count_withdraws_first_page =
    (588 - (150 + deposits.length * 25 + 80)) / 30 - 2;
  const continue_on_next_withdraws = continue_on_next_withdraws_h > 588;

  return (
    <Document>
      <Page size={[612, 792]}>
        <View style={styles.v101_1193}>
          <View style={styles.v101_1231}>
            {/* <Text>`url"` + {host}/bank_of_america_images/v101_1259.png</Text> */}
            <Text style={styles.v101_1232}>Page 1 of 9</Text>
            <Text style={styles.v101_1233}>
              PULL: "E CYCLE: 60 SPEC: E DELIVERY: E TYPE: IMAGE: A BC: NY
            </Text>
            <View style={styles.v101_1234}></View>
            <View style={styles.v101_1235}>
              <Image src={`${host}/bank_of_america_images/v101_1235.png`} />
            </View>
            <Text style={styles.v101_1237}>
              # of deposits/credits: "6 {"\n"}# of withdrawals/debits: 21 {"\n"}
              # of, items-previous cycle¹: "0 {"\n"}# of days in cycle: 31{" "}
              {"\n"}
              Average ledge, balance: ${average_ledge_balance}
            </Text>
            <Text style={styles.v101_12344}>
              ¹Includes checks paid, deposited items and other, debits
            </Text>
            <View style={styles.mainfinanceinfo}>
              <View style={styles.mainfinanceinfo_row}>
                <Text style={styles.mainfinanceinfo_row_text}>
                  Beginning balance on {beggining_date}
                </Text>
                <Text style={styles.mainfinanceinfo_row_text}>
                  ${beggining_summ}
                </Text>
              </View>
              <View style={styles.mainfinanceinfo_row}>
                <Text style={styles.mainfinanceinfo_row_text}>
                  Deposits and other credits
                </Text>
                <Text style={styles.mainfinanceinfo_row_text}>
                  {deposits_summ}
                </Text>
              </View>
              <View style={styles.mainfinanceinfo_row}>
                <Text style={styles.mainfinanceinfo_row_text}>
                  Withdrawals and other debits
                </Text>
                <Text style={styles.mainfinanceinfo_row_text}>
                  {withdrawals_summ}
                </Text>
              </View>
              <View style={styles.mainfinanceinfo_row}>
                <Text style={styles.mainfinanceinfo_row_text}>Checks</Text>
                <Text style={styles.mainfinanceinfo_row_text}>
                  {checks_summ}
                </Text>
              </View>
              <View style={styles.mainfinanceinfo_row}>
                <Text style={styles.mainfinanceinfo_row_text}>
                  Service fees
                </Text>
                <Text style={styles.mainfinanceinfo_row_text}>
                  {service_summ}
                </Text>
              </View>
              <View style={styles.mainfinanceinfo_row}>
                <Text style={styles.mainfinanceinfo_row_text_blue}>
                  Ending balance on {ending_date}
                </Text>
                <Text style={styles.mainfinanceinfo_row_text_blue}>
                  ${ending_summ}
                </Text>
              </View>
            </View>

            <Text style={styles.v101_1254}>Account summary</Text>
            <Text style={styles.v101_1255}>
              Account number: {account_number}
            </Text>
            <Text style={styles.v101_1256}>
              for {beggining_date} to {ending_date} ANDERSON'S REPAIR SERVICE
              INC
            </Text>
            <Text style={styles.v101_1257}>
              Your Business Advantage Fundamentals™ Banking
            </Text>
            <Text style={styles.v101_1258}>
              Bank of America, N.A. P.O. Box 25118 Tampa, FL 33622-5118
            </Text>
            <View style={styles.v101_1259}>
              <Image src={`${host}/bank_of_america_images/v101_1259.png`} />
            </View>
            <Text style={styles.v101_1260}>
              ANDERSON'S REPAIR SERVICE INC 6195 FORTNER ST DOTHAN AL,
              36305-6822
            </Text>
            <Text style={styles.v101_1261}>bankofamerica.com</Text>
            <View style={styles.v101_1262}>
              <Image src={`${host}/bank_of_america_images/v101_1262.png`} />
            </View>
            <Text style={styles.v101_1263}>
              1.888.BUSINESS (1.888.287.4637)
            </Text>
            <View style={styles.v101_1264}>
              <Image src={`${host}/bank_of_america_images/v101_1264.png`} />
            </View>
            <Text style={styles.v101_1265}>Customer service information</Text>
            <View style={styles.v101_1266}></View>
            <Text style={styles.v101_1267}>
              P.O. Box 15284 Wilmington, DE 19850
            </Text>
            <View style={styles.v101_1268}>
              <Image src={`${host}/bank_of_america_images/v101_1268.png`} />
            </View>
            <View style={styles.v101_1269}>
              <Image src={`${host}/bank_of_america_images/v101_1269.png`} />
            </View>
          </View>
        </View>
      </Page>
      <Page size={[612, 792]} style={styles.page}>
        <Text style={styles.h2}>IMPORTANT INFORMATION:</Text>
        <Text style={styles.h3}>BANK DEPOSIT ACCOUNTS</Text>
        <View style={styles.contact}>
          <Text style={styles.termin}>How to Contact Us</Text>
          <Text style={styles.about}>
            - You may call us at the telephone number listed on the front of
            this statement.
          </Text>
        </View>
        <View style={styles.contact}>
          <Text style={styles.termin}>Updating your contact information</Text>
          <Text style={styles.about}>
            - We encourage you to keep your contact information up-to-date. This
            includes address, email and phone number. If your information has
            changed, the easiest way to update it is by visiting the Help &
            Support tab of Online Banking.
          </Text>
        </View>
        <View style={styles.contact}>
          <Text style={styles.termin}>Deposit agreement</Text>
          <Text style={styles.about}>
            - When you opened your account, you received a deposit agreement and
            fee schedule and agreed that your account would be governed by the
            terms of these documents, as we may amend them from time to time.
            These documents are part of the contract for your deposit account
            and govern all transactions relating to your account, including all
            deposits and withdrawals. Copies of both the deposit agreement and
            fee schedule which contain the current version of the terms and
            conditions of your account relationship may be obtained at our
            financial centers.
          </Text>
        </View>
        <View style={styles.contact}>
          <Text style={styles.termin}>
            Electronic transfers: In case of errors or questions about your
            electronic transfers
          </Text>
          <Text style={styles.about}>
            - If you think your statement or receipt is wrong or you need more
            information about an electronic transfer (e.g., ATM transactions,
            direct deposits or withdrawals, point-of-sale transactions) on the
            statement or receipt, telephone or write us at the address and
            number listed on the front of this statement as soon as you can. We
            must hear from you no later than 60 days after we sent you the FIRST
            statement on which the error or problem appeared. For consumer
            accounts used primarily for personal, family or household purposes,
            we will investigate your complaint and will correct any error
            promptly. If we take more than 10 business days (10 calendar days if
            you are a Massachusetts customer) (20 business days if you are a new
            customer, for electronic transfers occurring during the first 30
            days after the first deposit is made to your account) to do this, we
            will provisionally credit your account for the amount you think is
            in error, so that you willhave use of the money during the time it
            will take to complete our investigation.
          </Text>
        </View>

        <View style={styles.flash}>
          <Text style={styles.flashh}>-</Text>
          <Text style={styles.flashtext}>
            Tell us your name and account number.
          </Text>
        </View>

        <View style={styles.flash}>
          <Text style={styles.flashh}>-</Text>
          <Text style={styles.flashtext}>
            Describe the error or transfer you are unsure about, and explain as
            clearly as you can why you believe there is an error or why you need
            more information.
          </Text>
        </View>

        <View style={styles.flash}>
          <Text style={styles.flashh}>-</Text>
          <Text style={styles.flashtext}>
            Tell us the dollar amount of the suspected error.
          </Text>
        </View>

        <Text style={styles.termin}>
          For other accounts, we investigate, and if we find we have made an
          error, we credit your account at the conclusion of our investigation.
        </Text>

        <View style={styles.contact}>
          <Text style={styles.termin}>Reporting other problems </Text>
          <Text style={styles.about}>
            - You must examine your statement carefully and promptly. You are in
            the best position to discover errors and unauthorized transactions
            on your account. If you fail to notify us in writing of suspected
            problems or an unauthorized transaction within the time period
            specified in the deposit agreement (which periods are no more than
            60 days after we make the statement available to you and in some
            cases are 30 days or less), we are not liable to you and you agree
            to not make a claim against us, for the problems or unauthorized
            transactions.
          </Text>
        </View>
        <View style={styles.contact}>
          <Text style={styles.termin}>Direct deposits</Text>
          <Text style={styles.about}>
            - If you have arranged to have direct deposits made to your account
            at least once every 60 days from the same person or company, you may
            call us to find out if the deposit was made as scheduled. You may
            also review your activity online or visit a financial center for
            information.
          </Text>
        </View>
      </Page>
      <Page size={[612, 792]}>
        <View style={styles.v101_1202}>
          <View style={styles.v101_1291}>
            <Text style={styles.v101_1292}>Page 3 of 9</Text>
            <View style={styles.v101_1293}>
              <Image src={`${host}/bank_of_america_images/v101_1293.png`} />
            </View>
            <View
              style={{
                ...styles.table_fullscreen,
                marginLeft: "36px",
                marginTop: "150px",
              }}
            >
              {deposits.map((item, index) => (
                <View style={styles.table_row}>
                  <Text style={styles.table_row_date}>{item.date}</Text>
                  <View style={styles.table_row_withoutdate}>
                    <Text style={styles.table_row_text}>
                      {item.description}
                    </Text>
                    <Text style={styles.table_row_text}>{item.amount}</Text>
                  </View>
                </View>
              ))}
              <View style={styles.table_final_row}>
                <Text style={styles.table_final_row_text}>
                  Total deposits and other credits
                </Text>
                <Text style={styles.table_final_row_text}>
                  ${deposits_summ}
                </Text>
              </View>
            </View>

            <View style={styles.block_spends}>
              <Text style={styles.title_spends}>
                Withdrawals and other debits
              </Text>
              <View style={styles.table_fullscreen}>
                <View style={styles.table_row}>
                  <Text style={styles.table_row_date}>Date</Text>
                  <View style={styles.table_row_withoutdate}>
                    <Text style={styles.table_row_text}>Description</Text>
                    <Text style={styles.table_row_text}>Amount</Text>
                  </View>
                </View>
                {withdrawals.map((item, index) =>
                  index < count_withdraws_first_page ? (
                    <View style={styles.table_row}>
                      <Text style={styles.table_row_date}>{item.date}</Text>
                      <View style={styles.table_row_withoutdate}>
                        <Text style={styles.table_row_text}>
                          {item.description}
                        </Text>
                        <Text style={styles.table_row_text}>
                          -{item.amount}
                        </Text>
                      </View>
                    </View>
                  ) : (
                    ""
                  )
                )}
                {!continue_on_next_withdraws ? (
                  <View style={styles.table_final_row}>
                    <Text style={styles.table_final_row_text}>
                      Total withdrawals and other debits
                    </Text>
                    <Text style={styles.table_final_row_text}>
                      -${withdrawals_summ}
                    </Text>
                  </View>
                ) : (
                  <Text style={styles.continued}>
                    continued on the next page
                  </Text>
                )}
              </View>
            </View>

            <View style={styles.v101_1358}></View>
            <Text style={styles.v101_1359}>Amount</Text>
            <Text style={styles.v101_1360}>Description</Text>
            <Text style={styles.v101_1361}>Date</Text>
            <Text style={styles.v101_1362}>Deposits and other credits</Text>
            <View style={styles.v101_1363}></View>
            <Text style={styles.v101_1364}>
              ANDERSON'S REPAIR SERVICE INC | Account # 3251 8953 3953 | March
              1, 2024 to March 31, 2024
            </Text>
            <View style={styles.v101_1367}>
              <View style={styles.v101_1365}></View>
              <Text style={styles.v101_1366}>Your checking account</Text>
            </View>
            <View style={styles.v101_1368}>
              <Image src={`${host}/bank_of_america_images/v101_1269.png`} />
            </View>
          </View>
        </View>
      </Page>
      <Page size={[612, 792]}>
        <View style={styles.v101_1206}>
          <View style={styles.v101_1369}>
            <Text style={styles.v101_1370}>Page 4 of 9</Text>

            {continue_on_next_withdraws ? (
              <View style={{ ...styles.block_spends, marginTop: "121px" }}>
                <Text style={styles.title_spends}>
                  Withdrawals and other debits - continued
                </Text>
                <View style={styles.table_fullscreen}>
                  <View style={styles.table_row}>
                    <Text style={styles.table_row_date}>Date</Text>
                    <View style={styles.table_row_withoutdate}>
                      <Text style={styles.table_row_text}>Description</Text>
                      <Text style={styles.table_row_text}>Amount</Text>
                    </View>
                  </View>
                  {withdrawals.map((item, index) =>
                    index < count_withdraws_first_page ? (
                      <View style={styles.table_row}>
                        <Text style={styles.table_row_date}>{item.date}</Text>
                        <View style={styles.table_row_withoutdate}>
                          <Text style={styles.table_row_text}>
                            {item.description}
                          </Text>
                          <Text style={styles.table_row_text}>
                            -{item.amount}
                          </Text>
                        </View>
                      </View>
                    ) : (
                      ""
                    )
                  )}
                  <View style={styles.table_final_row}>
                    <Text style={styles.table_final_row_text}>
                      Total withdrawals and other debits
                    </Text>
                    <Text style={styles.table_final_row_text}>
                      -${withdrawals_summ}
                    </Text>
                  </View>
                </View>
              </View>
            ) : (
              ""
            )}
            {checks.length > 0 ? (
              <View style={{ ...styles.block_spends }}>
                <Text style={styles.title_spends}>Checks</Text>
                <View style={styles.table_with_columns}>
                  <View style={styles.table_checks_path}>
                    <View
                      style={{
                        ...styles.table_row,
                        border: 0,
                        marginBottom: "1px",
                        height: "15px",
                        paddingTop: "2px",
                        padding: 0,
                        alignItems: "end",
                      }}
                    >
                      <Text style={styles.table_row_date}>Date</Text>
                      <View style={styles.table_row_withoutdate}>
                        <Text style={styles.table_row_text}>Check #</Text>
                        <Text style={styles.table_row_text}>Amount</Text>
                      </View>
                    </View>
                    {checks1.length > 0
                      ? checks1.map((item, index) => (
                          <View
                            style={{
                              ...styles.table_row,
                              marginBottom: "1px",
                              height: "15px",
                              padding: 0,
                              paddingTop: "2px",
                              alignItems: "end",
                            }}
                          >
                            <Text style={styles.table_row_date}>
                              {item.date}
                            </Text>
                            <View style={styles.table_row_withoutdate}>
                              <Text style={styles.table_row_text}>
                                {item.check}
                              </Text>
                              <Text style={styles.table_row_text}>
                                -{item.amount}
                              </Text>
                            </View>
                          </View>
                        ))
                      : ""}
                  </View>
                  <View style={styles.table_checks_path}>
                    <View
                      style={{
                        ...styles.table_row,
                        border: 0,
                        marginBottom: "1px",
                        height: "15px",
                        paddingTop: "2px",
                        padding: 0,
                        alignItems: "end",
                      }}
                    >
                      <Text style={styles.table_row_date}>Date</Text>
                      <View style={styles.table_row_withoutdate}>
                        <Text style={styles.table_row_text}>Check #</Text>
                        <Text style={styles.table_row_text}>Amount</Text>
                      </View>
                    </View>
                    {checks2.length > 0
                      ? checks2.map((item, index) => (
                          <View
                            style={{
                              ...styles.table_row,
                              marginBottom: "1px",
                              height: "15px",
                              paddingTop: "2px",
                              padding: 0,
                              alignItems: "end",
                            }}
                          >
                            <Text style={styles.table_row_date}>
                              {item.date}
                            </Text>
                            <View style={styles.table_row_withoutdate}>
                              <Text style={styles.table_row_text}>
                                {item.check}
                              </Text>
                              <Text style={styles.table_row_text}>
                                -{item.amount}
                              </Text>
                            </View>
                          </View>
                        ))
                      : ""}
                    <View style={styles.table_final_row}>
                      <Text style={styles.table_final_row_text}>
                        Total checks Total
                      </Text>
                      <Text style={styles.table_final_row_text}>
                        -${checks_summ}
                      </Text>
                    </View>
                    <View style={styles.table_final_row}>
                      <Text style={styles.table_final_row_text}>
                        # of checks
                      </Text>
                      <Text style={styles.table_final_row_text}>
                        {checks.length}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            ) : (
              ""
            )}
            {daily_balances.length > 0 ? (
              <View style={{ ...styles.block_spends }}>
                <Text style={styles.title_spends}>Daily ledger balances</Text>
                <View style={styles.table_with_columns}>
                  <View style={styles.table_balances_path}>
                    <View
                      style={{
                        ...styles.table_row,
                        border: 0,
                        marginBottom: "1px",
                        height: "15px",
                        paddingTop: "2px",
                        padding: 0,
                        alignItems: "end",
                      }}
                    >
                      <View style={styles.table_row_withoutdate}>
                        <Text style={styles.table_row_text}>Date</Text>
                        <Text style={styles.table_row_text}>Balance($)</Text>
                      </View>
                    </View>
                    {daily_balances1.length > 0
                      ? daily_balances1.map((item, index) => (
                          <View
                            style={{
                              ...styles.table_row,
                              marginBottom: "1px",
                              height: "15px",
                              padding: 0,
                              paddingTop: "2px",
                              alignItems: "end",
                            }}
                          >
                            <View style={styles.table_row_withoutdate}>
                              <Text style={styles.table_row_text}>
                                {item.date}
                              </Text>
                              <Text style={styles.table_row_text}>
                                {item.balance}
                              </Text>
                            </View>
                          </View>
                        ))
                      : ""}
                  </View>
                  <View style={styles.table_balances_path}>
                    <View
                      style={{
                        ...styles.table_row,
                        border: 0,
                        marginBottom: "1px",
                        height: "15px",
                        paddingTop: "2px",
                        padding: 0,
                        alignItems: "end",
                      }}
                    >
                      <View style={styles.table_row_withoutdate}>
                        <Text style={styles.table_row_text}>Date</Text>
                        <Text style={styles.table_row_text}>Balance($)</Text>
                      </View>
                    </View>
                    {daily_balances2.length > 0
                      ? daily_balances2.map((item, index) => (
                          <View
                            style={{
                              ...styles.table_row,
                              marginBottom: "1px",
                              height: "15px",
                              padding: 0,
                              paddingTop: "2px",
                              alignItems: "end",
                            }}
                          >
                            <View style={styles.table_row_withoutdate}>
                              <Text style={styles.table_row_text}>
                                {item.date}
                              </Text>
                              <Text style={styles.table_row_text}>
                                {item.balance}
                              </Text>
                            </View>
                          </View>
                        ))
                      : ""}
                  </View>
                  <View style={styles.table_balances_path}>
                    <View
                      style={{
                        ...styles.table_row,
                        border: 0,
                        marginBottom: "1px",
                        height: "15px",
                        paddingTop: "2px",
                        padding: 0,
                        alignItems: "end",
                      }}
                    >
                      <View style={styles.table_row_withoutdate}>
                        <Text style={styles.table_row_text}>Date</Text>
                        <Text style={styles.table_row_text}>Balance($)</Text>
                      </View>
                    </View>
                    {daily_balances3.length > 0
                      ? daily_balances3.map((item, index) => (
                          <View
                            style={{
                              ...styles.table_row,
                              marginBottom: "1px",
                              height: "15px",
                              padding: 0,
                              paddingTop: "2px",
                              alignItems: "end",
                            }}
                          >
                            <View style={styles.table_row_withoutdate}>
                              <Text style={styles.table_row_text}>
                                {item.date}
                              </Text>
                              <Text style={styles.table_row_text}>
                                {item.balance}
                              </Text>
                            </View>
                          </View>
                        ))
                      : ""}
                  </View>
                </View>
              </View>
            ) : (
              ""
            )}
            <View style={styles.v101_1493}></View>
            <Text style={styles.v101_1494}>
              ANDERSON'S REPAIR SERVICE INC | Account # 3251 8953 3953 | March
              1, 2024 to March 31, 2024
            </Text>
            <View style={styles.v101_1497}>
              <View style={styles.v101_1495}></View>
              <Text style={styles.v101_1496}>Your checking account</Text>
            </View>
            <View style={styles.v101_1498}>
              <Image src={`${host}/bank_of_america_images/v101_1269.png`} />
            </View>
          </View>
        </View>
      </Page>
      <Page size={[612, 792]} style={styles.page_important_messages}>
        <View style={styles.important_header}>
          <Text style={styles.header_endmessage}>
            Important Messages - Please Read
          </Text>
          <Text style={styles.important_information_span}>
            We want to make sure you stay up-to-date on changes, reminders, and
            other important details that could impact you.
          </Text>
        </View>
        <Text style={styles.important_information_span}>
          Good news!
          {"\n"}We no longer charge these service fees here are the details.
        </Text>
        <Text style={styles.important_information_text}>
          {"\n"}
          {"\n"}· Legal Order Process Fee
          {"\n"}
          {"\u00A0\u00A0\u00A0\u00A0"}On October 16, 2023, we stopped charging a
          fee for each legal order or process that directs us to freeze, attach
          or withhold
          {"\n"}
          {"\u00A0\u00A0\u00A0\u00A0"}funds or other property.
          {"\n"}
          {"\n"}· Check Image Service Fee{"\n"}
          {"\u00A0\u00A0\u00A0\u00A0"}On November 6, 2023, we stopped charging a
          fee for returning images of canceled checks with statements sent in
          the mail.
          {"\n"}
          {"\n"}In addition, we stopped charging these service fees on December
          11, 2023:
          {"\n"}
          {"\n"}· Check and Statement Copy Fees
          {"\n"}
          {"\u00A0\u00A0\u00A0\u00A0"}For ordering one or more copies of your
          checks or statements
          {"\n"}
          {"\n"}· Deposit Slips and other Credit Item Copies
          {"\n"}
          {"\u00A0\u00A0\u00A0\u00A0"}For ordering one or more copies of your
          deposit slips or credit items
          {"\n"}
          {"\n"}· ATM Balance Inquiry Fees
          {"\n"}
          {"\u00A0\u00A0\u00A0\u00A0"}For requesting an account balance at a
          non-Bank of America ATM in the U.S. or in a foreign country
          {"\n"}
          {"\n"}· NY Protest Fee
          {"\n"}
          {"\u00A0\u00A0\u00A0\u00A0"}For New York residents filing a
          certificate of protest when a payment instrument has not been honored
          {"\n"}
          {"\n"}· Bond Coupon Collection Fees
          {"\n"}
          {"\u00A0\u00A0\u00A0\u00A0"}For debt obligations with coupons that
          represent semiannual interest payments
          {"\n"}
          {"\n"}
        </Text>
        <View
          style={{
            color: "#231f20",
            backgroundColor: "#231f20",
            height: 0.25,
            width: "100%",
          }}
        ></View>
      </Page>
    </Document>
  );
};

export default SimpleDocument;
