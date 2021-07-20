import { Repository, EntityRepository } from 'typeorm'
import { Compliment } from '../entities/Complements'

@EntityRepository(Compliment)
class ComplimentsRepositories extends Repository<Compliment> {}

export { ComplimentsRepositories }