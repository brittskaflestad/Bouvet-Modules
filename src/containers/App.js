import React from 'react';
import AppHeader from '../components/AppHeader';
import AppInputBtn from '../components/AppInputBtn';
import AppInputText from '../components/AppInputText';
import AppDropDown from '../components/AppDropDown'
import '../styles/_app.css';

const contenTypeOptions =  ["Prosjekt", "Tilbud", "Salg", "Fag", "Organisasjon", "Sosialt", "Annet"];
const customerOtions = ["Scandiabanken","Reindriftsforvaltningen", "Rammeavtale_2015_konkurranse", "RFI2", "Randaberg kommune", "Revisorforeningen", "RBL", "Retriever", "Renovasjonen IKS", "Reach Subsea", "Rammeavtaler på IT-konsulenttjenester for Flytoget 2015"]
const unitOptions = ["Ulriken", "Fløien", "Løvstakken", "Lyderhorn"]
const subjectOptions = ["RPA", "Patternlab", "O365", "Prosess og ledelse", "Frontend"]
const headerSubText = 'Hva vil du lage?'; 
const defaultContentTypeOption = "Hva gjelder det?";
const defaultCustomerOption = "Hvilken kunde gjelder det?";
const defaultUnitOption = "Hvilken enhet gjelder det?";
const defaultSubjectOption = "Hvilket fagområde gjelder det?";
const defaultTextboxValue = 'Navn';
const textboxItalicClassname = 'App_inputTextItalic';

class App extends React.Component { 
    
    contentTypeValueChanged(selectedValue) {                    
        if (selectedValue === 'Prosjekt' || selectedValue === "Tilbud" || selectedValue === "Salg") {
            this.setState({...this.state, selectedContenttype : selectedValue, customersVisible: true, unitsVisible: true, subjectsVisible: false});
        }
        else if (selectedValue === "Fag" || selectedValue === "Organisasjon" || selectedValue === "Sosialt") {
            this.setState({...this.state, selectedContenttype : selectedValue, subjectsVisible: true, customersVisible: false, unitsVisible: true });
        }
        else
            this.setState({...this.state, selectedContenttype : selectedValue, subjectsVisible: true, customersVisible: true, unitsVisible: true });        
        }
    
    enterPressed(){
        this.createNewObject();
    }

    textboxFocus(){        
        if (this.state.inputName === defaultTextboxValue)
            {
                this.setState({...this.state, inputStyle : "App_inputText", inputName: ""});
            }
    }

    textboxBlur(){
        if (this.state.inputName === defaultTextboxValue || this.state.inputName === ""){
            this.setState({...this.state, inputStyle : "App_inputTextItalic", inputName:defaultTextboxValue});
        }
    }

    textboxChanged(value)
    {
        this.setState({...this.state, inputName:value});        
    }

    createNewObject(){   
        const customer = this.state.selectedCustomer === defaultCustomerOption || this.state.selectedCustomer === undefined ? null : this.state.selectedCustomer;
        const unit = this.state.selectedUnit === defaultUnitOption || this.state.selectedUnit === undefined ? null : this.state.selectedUnit;
        const subject = this.state.selectedSubject === defaultSubjectOption || this.state.selectedSubject === undefined ? null : this.state.selectedSubject;

        let stringVal = `Du ønsker å opprette et område for arbeid med ${this.state.selectedContenttype} som gjelder`;        
        stringVal += customer ? ` kunde ${customer},` : "";
        stringVal += unit ? ` avdeling ${unit},` : "";
        stringVal += subject ? ` fagområdet ${subject},` : "";        
        stringVal += ` med navn '${this.state.inputName}'`;
        var val = window.confirm(stringVal);
        if (val){
            return true;
        }
        else
            return false;
    }

    constructor(props, context) {
        
        super(props,context);
        this.state =  {
            customersVisible : false,
            subjectsVisible : false,
            unitsVisible : false,
            inputName: defaultTextboxValue,
            inputStyle: textboxItalicClassname,
            selectedContenttype: defaultContentTypeOption,
            selectedCustomer: defaultCustomerOption,
            selectedUnit: defaultUnitOption,
            selectedSubject: defaultSubjectOption
        };
        }

    render(){
      return(
  
        <div className="App">
            <AppHeader subText={headerSubText} />
            
            <AppDropDown onValueChanged={(value) => this.contentTypeValueChanged(value)} key="contentTypes" visibility={true} options={contenTypeOptions} disabledOption={defaultContentTypeOption}/>
            
            {this.state.customersVisible && <AppDropDown key="customers" onValueChanged={(value) => this.setState({...this.state, selectedCustomer : value})} options={customerOtions} disabledOption={defaultCustomerOption} />}            
            {this.state.subjectsVisible && <AppDropDown key="subjects" onValueChanged={(value) => this.setState({...this.state, selectedSubject: value})} options={subjectOptions} disabledOption={defaultSubjectOption} />}            
            {this.state.unitsVisible && <AppDropDown key="units" onValueChanged={(value) => this.setState({...this.state, selectedUnit : value})} options={unitOptions} disabledOption={defaultUnitOption} />}

            
            <div className="divBlock">
            <AppInputText style={this.state.inputStyle} inputText={this.state.inputName} onChange={(value) => this.textboxChanged(value)} onBlur={(event) => this.textboxBlur(event)} onFocus={(event) => this.textboxFocus(event)} onkeyUpEnter={(event) => this.enterPressed(event)}/> 
                <AppInputBtn onClick={(event) => this.createNewObject(event)} inputText="Opprett"/>
            </div>
      </div>
      )};
}


export default App;
