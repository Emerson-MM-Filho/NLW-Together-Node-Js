import { Repository, EntityRepository } from 'typeorm'
import { Tag } from '../entities/Tag'

@EntityRepository(Tag)
class ComplimentsRepositories extends Repository<Tag> {}

export { ComplimentsRepositories }