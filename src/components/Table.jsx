import { calculateInvestmentResults, formatter } from "../util/investment"

export default function Table({input}){

    const resultsData = calculateInvestmentResults(input)
    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment
    
    return(
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map(yeardata =>
                    {
                        const totalinterest = yeardata.valueEndOfYear - yeardata.annualInvestment * yeardata.year - initialInvestment
                        const totalAmountInvested = yeardata.valueEndOfYear - totalinterest
                        return(
                            <tr key={yeardata.year}>
                            <td>{yeardata.year}</td>
                            <td>{formatter.format(yeardata.valueEndOfYear)}</td>
                            <td>{formatter.format(yeardata.interest)}</td>
                            <td>{formatter.format(totalinterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                        )
                        
                    }
                )}
                
            </tbody>
        </table>
    )
}