import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../services/api';
import { Loading, Owner, IssueList, Button, ButtonPrevios } from './styles';

import Container from '../../components/Container';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
    page: 1,
    isFirst: true,
  };

  async componentDidMount() {
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          page: this.state.page,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  async componentDidUpdate(_, prevState) {
    const { page } = this.state;
    if (page !== prevState.page) {
      const { match } = this.props;
      const repoName = decodeURIComponent(match.params.repository);
      const issues = await api.get(`/repos/${repoName}/issues`, {
        params: {
          page: this.state.page,
        },
      });

      this.setState({
        issues: issues.data,
        loading: false,
        isFirst: false,
      });

      if (page === 1) {
        console.log('caiu');
        this.setState({
          isFirst: true,
        });
      }
    }
  }

  async changeResult(num) {
    const { page } = this.state;
    this.setState({
      page: page + num,
    });
  }

  render() {
    const { repository, issues, loading, isFirst } = this.state;

    if (loading) {
      return <Loading>Carregando</Loading>;
    }

    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositórios</Link>
          <img
            src={repository.owner.avatar_url}
            alt={repository.owner.loading}
          />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>
        <Button>
          <button onClick={() => this.changeResult(1)}>Próxima</button>
          <ButtonPrevios
            isFirst={isFirst}
            onClick={() => this.changeResult(-1)}
          >
            Anterior
          </ButtonPrevios>
        </Button>
        <IssueList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>
      </Container>
    );
  }
}
