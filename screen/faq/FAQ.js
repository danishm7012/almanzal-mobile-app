import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { SafeAreaView, Text, View } from 'react-native'

import AllStyle from '../../AllStyle'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const FAQ = (props) => {
  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={AllStyle.aboutMainClass}>
          <View style={{}}>
            <Text
              style={[
                { fontSize: 18, textAlign: 'center' },
                AllStyle.Aboutheading,
              ]}
            >
              Frequently asked Questions
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. What is Newage Marketing? 
            </Text>
          </View>

          <View style={{ margin: 5 }}>
            <Text style={AllStyle.Aboutdetail}>
              Newage Marketing Global is providing state of the art services to
              its global clientele regarding buying, selling, letting facilities
              to the clients. We are launching projects in the Gulf, Europe, the
              USA, and Pakistan.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. What is AlManzil group? 
            </Text>
          </View>

          <View style={{}}>
            <Text style={AllStyle.Aboutdetail}>
              AlManzil is the subsidiary firm of real estate Company Newage
              having multi-subsidiary investment channels in the real estate
              businesses. It has many observatory business platforms to promote
              property and sale purchases of commercial and residential lands in
              the UAE, the UK, the US, and Pakistan.  
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. Is AlManzal, the Subsidiary of the Newage group? 
            </Text>
          </View>

          <View style={{ margin: 5 }}>
            <Text style={AllStyle.Aboutdetail}>
              Yes, the AlManzal is the Subsidiary of the Newage group having
              expertise in the real estate business in the UK, US, and UAE. We
              also offer our services in Pakistan for real estate development.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. Does Newage exist in the UAE?
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              Yes, Newage has its offices around the world; in the UAE, the
              Newage possesses its registered building office in Park Lane
              Plaza, Downtown Dubai.  
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. Does Newage offer Investment Opportunities? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              Yes, the real estate projects by the Newage groupin the UAE are
              marketingservices in GCC countries, including Iran, Iraq, Bahrain,
              Saudi Arabia, etc., and other parts of the world. It is a golden
              opportunity for our UAE clients and surrounding clients to invest
              in their money. Advanced infrastructure and innovative business
              ideas for our clients is our ultimate goal. 
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. Who owns NewageReal Estate? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              The Newage real estate company is owned by Samuel Palmer, Founder
              & CEO, Realty Properties Inc., and some other investors from the
              UK, US, and Pakistan. 
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. What Property Services Newage group provides? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              Newage offers a vast range of property dealings such as renting,
              purchasing, selling, and investing. We welcome investors from all
              over the world. There are many branches we deal with to serve you
              better in property-related needs in Dubai. We assist and provide
              you the professional services to buy the Freehold properties in
              Dubai and other emirates of the UAE.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. What are Freehold Properties in Dubai/UAE?
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              The legal validity of property on a freehold basis refers to the
              legally registered property as per the owner's name. Moreover, the
              Title Deed must be registered in the Dubai Land Department. The
              legal owner reserves the right to sell, lease or rent his/her
              land, plot, property, or apartment at his/her discretion. This is
              dedicatedly meant to international buyers.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. Who can buy Freehold Properties in Dubai?
            </Text>
          </View>

          <View style={{ margin: 5 }}>
            <Text style={AllStyle.Aboutdetail}>
              According to the laws of the UAE, the freehold properties are
              entitled to the areas for expatriates (international accommodators
              in Dubai). Dubai laws give the facility to buy the properties to
              such nationals in a specific range of areas in Dubai under typical
              tenure to stay.  
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. What is Non-Freehold Property in the UAE? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              The non- freehold property means the property is limited to only
              UAE Nationals and GCC residents. Nationals of any other country
              cannot buy these properties.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. How Long Can You Stay Having Freehold Property? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              The UAE Laws also render you bound to stay under a specific time
              in the UAE. A maximum 2 years (extendable, renewable) visa is
              issued for those having Freehold Property. Nonetheless, the
              properties must be above AED 1,000,000 for a 2-year residency
              visa.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. What Documents Required for Purchasing a Freehold Property in
              the UAE? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              For international buyers, a Valid Passport proof without any
              criminal or conflicting court underway case involvement is
              required.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. What is Purchasing an “Off–Plan” Property In the UAE/Dubai? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              One of the most important initial steps to ensure is that the
              property project has legally been registered with RERA and that
              the concerned developer has got the valid registration documents
              and escrow funds registration from the concerned authorities.
              While purchasing the property directly from a land or property
              developer whohas not constructed – an "off–plan" purchase, the
              expatriates will need to submit a complete reservation form along
              with a copy of their valid passport. The reservation form
              generally and in detail abridges the basic terms and conditions of
              the relevant sales agreement, the informationabout the payment
              plan with the collective settlement, and general MoU (Memorandum
              of Understandings) between the buyer and the seller also the
              personal details of both parties. If the property has yet to be
              met for legal validity from a developer, be sure that the purchase
              agreement should clearly mention the date of completion and the
              compensation escrowed if the property completion or possession is
              not handed over by that time period. Furthermore, if the property
              is to be renovated, ensure the details of the renovation package
              are attached with the expenses and inclusions of the items in the
              agreement. To meet the process of buying property in Dubai becomes
              possible, you must transfer the deemed and deed money. This is
              accomplished at the developer’s office if the property has yet to
              be done or at the Land Department offices in Deira Dubai if the
              property is already registered.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. What is the Title Deed? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              The Title Deed is a mortgage settlement document between the owner
              and buyer or seller or buyer or developer and owner. It is issued
              with two originals, one is kept with the Bank until the mortgage
              has been settled, and the second one is originally held in the
              land department. A copy is retained with the Buyer. When the said
              mortgage is paid in full, a validating letter of release and an
              NOC (No Objection Certificate) is issued by the Bank, and the
              original is handed over to the buyer.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. What is an NOC in terms of Property Sale/Purchase in Dubai? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              An NOC (no objection certificate) is a legal document that
              concerned authorities and owner issues with a testimonial that
              they have no objection with the sale/purchase process between the
              said parties. It must be obtained from the concerned developer in
              order to underway the Title Deed in the land department. The NOC
              further elaborates that the developer has no objection on that the
              property being transferred or obtained, and if there are any
              liabilities against the apartment or property, the developer will
              address them accordingly.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. Who is Liable to Pay the Registration Cost of Title Deed? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              The official cost for registration of Title Deed should be divided
              equally between the buyer and the seller. However, nowadays, a
              general practice custom of dealing is that the buyer usually pays
              it. Somehow, the Standard fees, which are 2% and are reimbursed by
              both parties (buying and selling parties), yet a subject to
              negotiation between the buyer and seller.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. Does Newage Properties offer freehold properties in the UAE?? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              Yes, the Newage offers freehold properties around the UAE. Newage
              has vast fields and opportunities for all over the United Arab
              Emirates.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. Who can buy Freehold properties in the UAE? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              According to the laws of the Emirates, every local and
              international buyer can buy freehold properties in the UAE. A. The
              AlManzal Group of Properties is a subsidiary of the Newage
              properties and the real estate wing of the same Holding, the
              global investment conglomerate in the UAE. Through us, you can buy
              properties and holdings in Dubai and any other Emirate of the UAE.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. Is it allowed for the foreigners/ex-pats to buy a residence in
              Dubai? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              Yes, any person havinga nationality of any country having
              diplomatic relations with the UAE, whether he/she is a resident of
              Dubai or based abroad, can buy and own property in Dubai's
              freehold market according to the UAE constitution. Moreover, it is
              not required to hold any sort of permanent residence or similar
              permit in order to own property in the UAE.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. What are the particularsfor buying properties in Dubai or UAE? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              The legal process of purchasing a property needs four basic legal
              procedures to be followed in the UAE. You must be having a valid
              passport A registered developer, property agent or company to go
              ahead with the property sale or purchase. Proof of Investment and
              other documents necessary for buying freehold property in Dubai.
              You must be having an NOC of selling or purchasing property in the
              UAE. A mortgage or Deed Title to submit in the bank, in case of
              mortgage property.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. What Visa Type You Will Need to Purchase or Stay in Freehold
              Property? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              An international buyer and resident of non-GCC countries must
              require a 2-year valid visa for staying in the UAE with freehold
              property. The Visa is issued for maximum 2 years tenure, however
              it is extendable.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. What is RERA and What It Does? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              RERA stands for the Real Estate Regulatory Authority which is
              subsidiary legal part of the Dubai Land Department. It is a
              governed by the agency which issues licenses to the real estate
              agents, brokers, and land developers around the UAE. It also
              regulates all real estate activities and procedures in Dubai
              keeping in view the legal validity of the case.
            </Text>
          </View>

          <View style={{}}>
            <Text style={[{ fontSize: 14 }, AllStyle.Aboutheading]}>
              Q. Are All Real Estate Agents, Sales Representatives and Property
              Consultants Required To Have Credentials And Be Registered By
              theRERA? 
            </Text>
          </View>

          <View style={{ margin: 2 }}>
            <Text style={AllStyle.Aboutdetail}>
              Yes. Every licensed and registered property advisor or agent
              working under as land developer and brokerage firm or as a
              developer in Dubai requires to beregistered with the RERA
              authorities as per the legal requirements and credentials.The RERA
              issues a valid photo identity card along with a license number to
              the broker or property developer or real estate agency to work as
              the legal body. To gain a valid license by the RERA, the property
              agents have to undergo the courses and classesto pass the RERA
              real estate course and examinations. They will also beissued with
              an annual renewable RERA card which is valid for one year. Every
              agent or property firm must be registered under the umbrella of as
              the real estate agency.
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

FAQ.navigationOptions = (navData) => {
  return {
    headerTitle: () => (
      <Text
        style={{ fontSize: 16, fontFamily: 'open-sans-bold', color: '#fff' }}
      >
        FAQ
      </Text>
    ),
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navData.navigation.toggleDrawer()
          }}
        />
      </HeaderButtons>
    ),
  }
}

export default FAQ
