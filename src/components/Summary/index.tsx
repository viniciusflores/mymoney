import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext';
import { Container } from "./styles";
import {useContext} from 'react'

export function Summary() {
    const transactions = useContext(TransactionsContext)

    return (
        <Container>
            
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas"></img>
                </header>
                <strong>R$ 1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas"></img>
                </header>
                <strong>- R$ 200,00</strong>
            </div>
            
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total"></img>
                </header>
                <strong>R$ 800,00</strong>
            </div>
        </Container>
    )
}